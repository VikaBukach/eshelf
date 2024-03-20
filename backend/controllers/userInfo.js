const { ObjectId } = require("mongodb");
const client = require("../../db");

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
  const excludedCollections = ["orders", "users", "reviews"];

  // Відфільтровані колекції (без виключених)
  const collections = allCollectionNames.filter((collection) => !excludedCollections.includes(collection));

  // Збереження переглянутих товарів
  let viewedProducts = [];

  // Проходження по кожній колекції
  for (const collectionName of collections) {
    // Отримання зв'язку з колекцією
    const collection = database.collection(collectionName);

    // Створення масиву ObjectId зі списку товарів
    const objectIds = productsList.map((productId) => new ObjectId(productId));

    // Запит до колекції для отримання переглянутих товарів
    const viewedInCollection = await collection.find({ _id: { $in: objectIds } }).toArray();

    const withReviseDate = viewedInCollection.map((c) => {
      return {
        ...c,
        revisedAt: existingRecord.revised.find((r) => r.productId == c?._id).createdAt,
      };
    });
    // Додавання результатів до загального списку переглянутих товарів
    viewedProducts = viewedProducts.concat(withReviseDate);
  }

  try {
    res.status(201).send(viewedProducts);
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
