const Revised = require("../models/Revised");

const {
  EReader,
  Headphone,
  Laptop,
  Monitor,
  Mouse,
  PortableSpeaker,
  Quadcopter,
  Smartwatch,
  Smartphone,
  TV,
  Tablet,
} = require("../models/index");

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

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

  const existingRecord = await Revised.findOne({ userEmail });

  if (!existingRecord) {
    return res.send([]);
  }

  const productsList = existingRecord.revised.map((r) => r.productId);

  const allCollections = [
    EReader,
    Headphone,
    Laptop,
    Monitor,
    Mouse,
    PortableSpeaker,
    Quadcopter,
    Smartwatch,
    Smartphone,
    TV,
    Tablet,
  ];

  // Зберігаємо згруповані переглянуті продукти в обєкти по даті з полем ревізед, яке містить масив ІД переглянутих товарів
  const groupedRevisedData = groupDataByDate([...existingRecord.revised]);
  // Збереження переглянутих товарів
  // let viewedProducts = [];

  // Отримуємо унікальні ІД переглянутих товарів
  const uniqueIds = [...new Set(productsList)];

  let revisedArr = [];
  let products = [];
  // Проходження по кожній колекції
  for (const collectionName of allCollections) {
    // console.log(collectionName);
    // Запит до колекції для отримання переглянутих товарів
    const viewedInCollection = await collectionName.find({ _id: { $in: uniqueIds } });

    // Додаємо товари, які ми переглядали за весь час
    products = products.concat(deepClone(viewedInCollection));

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

  let recordId = null;

  // Flag to track if the request was canceled
  // let requestCanceled = false;

  // // Listen for the "close" event to detect cancellation
  // req.on("close", () => {
  //   if (!res.headersSent && req.destroyed) {
  //     // If headers are not sent yet, it means response hasn't been sent
  //     console.log("Request canceled by client");
  //     requestCanceled = true;
  //   }
  // });

  // // // Simulate delay using setTimeout (replace with your actual asynchronous operation)
  // // await new Promise((resolve) => setTimeout(resolve, 1000));

  // if (requestCanceled) {
  //   // If request was canceled, send a 400 response
  //   return res.status(400).send({ message: "Request was canceled." });
  // }

  const currentDate = new Date();
  const startOfDay = new Date(currentDate).setHours(0, 0, 0, 0);
  const endOfDay = new Date(currentDate).setHours(23, 59, 59, 999);

  try {
    // Перевіряєм, чи існує запис для користувача
    const existingRecord = await Revised.findOne({ userEmail });

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
        await Revised.findOneAndUpdate(
          { userEmail },
          { $push: { revised: { productId, createdAt: new Date() } } },
          { new: true }
        );
        res.status(201).send({ message: "New entry added successfully." });
      } else {
        // Якщо вже існує запис на сьогоднішню дату з таким самим productId, надсилаємо повідомлення
        res.status(200).send({ message: "Entry already exists for today." });
      }
    } else {
      // Якщо для користувача не існує запису, створюємо новий із зміненим масивом, що містить новий запис
      const response = await Revised.create({
        userEmail,
        revised: [{ productId, createdAt: new Date() }],
      });

      console.log(response);
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
