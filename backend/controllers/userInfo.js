const { ObjectId } = require("mongodb");
const client = require("../../db");

// Групуємо переглянуті продукти в обєкти по даті з полем ревізед, яке містить масив ІД переглянутих товарів
function groupDataByDate(data) {
  const groupedData = {};

  data.forEach((entry) => {
    const date = new Date(entry.createdAt).toDateString();
    if (!groupedData[date]) {
      groupedData[date] = { createdAt: date, revised: [] };
    }
    groupedData[date].revised.push(entry.productId);
  });

  return Object.values(groupedData);
}

const getRevised = async (req, res) => {
  const { userEmail } = req.query;
  const database = client.getDb();

  const revisedCollection = database.collection("revised");
  const existingRecord = await revisedCollection.findOne({ userEmail });

  if (!existingRecord) {
    return res.send([]);
  }

  const productsList = existingRecord.revised.map((r) => r.productId);

  const allCollections = await database.listCollections().toArray(); // Перетворення на масив
  const allCollectionNames = allCollections.map((collection) => collection.name.trim());

  // Список колекцій, які ви хочете виключити
  const excludedCollections = ["orders", "users", "reviews", "revised"];

  // Відфільтровані колекції (без виключених)
  const collections = allCollectionNames.filter((collection) => !excludedCollections.includes(collection));

  // Зберігаємо згруповані переглянуті продукти в обєкти по даті з полем ревізед, яке містить масив ІД переглянутих товарів
  const groupedRevisedData = groupDataByDate(existingRecord.revised);
  // Збереження переглянутих товарів
  // let viewedProducts = [];

  // Отримуємо унікальні ІД переглянутих товарів
  const uniqueIds = [...new Set(productsList)];

  // Створення масиву ObjectId зі списку товарів
  const objectIds = uniqueIds.map((productId) => new ObjectId(productId));

  let revisedArr = [];
  let products = [];
  // Проходження по кожній колекції
  for (const collectionName of collections) {
    // Отримання зв'язку з колекцією
    const collection = database.collection(collectionName);

    // Запит до колекції для отримання переглянутих товарів
    const viewedInCollection = await collection.find({ _id: { $in: objectIds } }).toArray();

    // Додаємо товари, які ми переглядали за весь час
    products = products.concat(viewedInCollection);

    // const withReviseDate = viewedInCollection.map((c) => {
    //   return {
    //     ...c,
    //     revisedAt: existingRecord.revised.find((r) => r.productId == c?._id).createdAt,
    //   };
    // });
    // // Додавання результатів до загального списку переглянутих товарів
    // viewedProducts = viewedProducts.concat(withReviseDate);
  }

  // Ітеруємось по масиву зрупованих продуктів
  groupedRevisedData.forEach((r) => {
    const revisedArrIds = r.revised;
    // Ітеруємось по масину з ІД переглянутих товарів в даний день
    revisedArrIds.forEach((revisedId) => {
      // Шукаємо серед всіх переглянутих товарів продукт по його ІД
      const product = products.find((item) => item?._id == revisedId);
      if (product) {
        const newRevised = {
          ...product,
          revisedAt: r.createdAt, // Додаємо поле з датою перегляду товару
        };
        // Додаємо товар в масив
        revisedArr.push(newRevised);
      }
    });
  });

  try {
    // Повертаємо масив з товарів, який містить дані про дату перегляду товару (від більш ранньої до пізньої)
    res.status(201).send(revisedArr.reverse());
  } catch (error) {
    res.status(201, {
      message: "Something went wrong!",
    });
  }
};

const postRevised = async (req, res) => {
  const { userEmail, productId } = req.body;
  const database = client.getDb();
  const revisedCollection = database.collection("revised");

  const currentDate = new Date();
  const startOfDay = new Date(currentDate).setHours(0, 0, 0, 0);
  const endOfDay = new Date(currentDate).setHours(23, 59, 59, 999);

  try {
    // Перевіряєм, чи існує запис для користувача
    const existingRecord = await revisedCollection.findOne({ userEmail });

    if (existingRecord) {
      // Якщо запис існує, перевіряємо чи вже є запис для сьогоднішньої дати з таким самим productId
      const existingEntryIndex = existingRecord.revised.findIndex(
        (entry) =>
          entry.productId === productId &&
          new Date(entry.createdAt) >= startOfDay &&
          new Date(entry.createdAt) <= endOfDay
      );

      if (existingEntryIndex === -1) {
        // Якщо немає запису для сьогоднішньої дати з тим самим productId, додаємо новий запис до масиву
        await revisedCollection.updateOne({ userEmail }, { $push: { revised: { productId, createdAt: new Date() } } });
        res.status(201).send({ message: "New entry added successfully." });
      } else {
        // Якщо вже існує запис на сьогоднішню дату з таким самим productId, надсилаємо повідомлення
        res.status(200).send({ message: "Entry already exists for today." });
      }
    } else {
      // Якщо для користувача не існує запису, створюємо новий із зміненим масивом, що містить новий запис
      await revisedCollection.insertOne({
        userEmail,
        revised: [{ productId, createdAt: new Date() }],
      });
      res.status(201).send({ message: "New record created successfully." });
    }
  } catch (error) {
    console.error("Error updating revised products:", error);
    res.status(500).send({ message: "Something went wrong!" });
  }
};

module.exports = {
  getRevised,
  postRevised,
};
