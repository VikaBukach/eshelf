const express = require("express");
const app = express();
const client = require("../../db");

const fetchAndLogModels = async () => {
  try {
    const database = client.getDb();
    const productsCollection = database.collection("smartphones");

    // Получаем список уникальных моделей
    const models = await productsCollection.distinct("model");

    // Выводим список моделей в консоль
    console.log("Unique models:");
    models.forEach((model) => {
      console.log(model);
    });
  } catch (error) {
    // Если произошла ошибка, выводим сообщение об ошибке в консоль
    console.error("Error fetching models:", error);
  }
};

// app.listen(process.env.PORT || 3000, () => {
//     console.log('Server is running...');
//     fetchAndLogModels(); // Здесь функция вызывается после успешного запуска сервера
// });
// const createReview = async (req, res) => {
//   const reviewData = req.body;
//   const database = client.getDb();
//   const reviewsCollection = database.collection("reviews");

//   const data = { ...reviewData, createdAt: new Date(Date.now()).toISOString() };

//   try {
//     await reviewsCollection.insertOne(data);
//     res.status(201).send(data);
//   } catch (error) {
//     console.error("Error saving review:", error);
//     res.status(500, {
//       message: "Something went wrong!",
//     });
//   }
// };

// const loadReviews = async (req, res) => {
//   const { productId, skip, take } = req.query;

//   const database = client.getDb();
//   const reviewsCollection = database.collection("reviews");
//   try {
//     const result = await reviewsCollection
//       .find({
//         productId,
//       })
//       .limit(+take)
//       .skip(+skip)
//       .sort({ createdAt: -1 })
//       .toArray();

//     const count = await reviewsCollection.countDocuments({
//       productId,
//     });
//     res.status(200).send({
//       reviews: result,
//       total: count,
//     });
//   } catch (error) {
//     console.error("Error saving review:", error);
//     res.status(500, {
//       message: "Something went wrong!",
//     });
//   }
// };

// const loadReviewsTotals = async (req, res) => {
//   const { productId } = req.query;

//   const database = client.getDb();
//   const reviewsCollection = database.collection("reviews");
//   try {
//     const count = await reviewsCollection.countDocuments({
//       productId,
//     });

//     const result = await reviewsCollection
//       .find({
//         productId,
//       })
//       .toArray();

//     const avg = Math.round(
//       result.reduce((prev, curr) => {
//         return +prev + +curr.rating;
//       }, 0) / count
//     );

//     res.status(200).send({
//       avgRating: avg,
//       reviewsCount: count,
//     });
//   } catch (error) {
//     console.error("Error saving review:", error);
//     res.status(500, {
//       message: "Something went wrong!",
//     });
//   }
// };

module.exports = { takeValuesToFilter };
