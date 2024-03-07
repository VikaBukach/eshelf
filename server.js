const env = require("dotenv");
env.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDb, getDb } = require("./db");
const { reviewRouter } = require("./backend/router");

const PORT = process.env.REACT_APP_PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

const handleCollectionRequest =
  ("/products",
  (collection, req, res) => {
    const products = [];

    db.collection(collection)
      .find()
      .sort({ model: 1 })
      .forEach((product) => products.push(product))
      .then(() => {
        res.status(200).json(products);
      })
      .catch(() => {
        res.status(500).json({ error: "Something goes wrong..." });
      });
  });

app.get("/smartphones", (req, res) => {
  handleCollectionRequest("smartphones", req, res);
});

app.get("/laptops", (req, res) => {
  handleCollectionRequest("laptops", req, res);
});

app.get("/monitors", (req, res) => {
  handleCollectionRequest("monitors", req, res);
});

app.use(reviewRouter);

app.get("/smartwatches", (req, res) => {
  handleCollectionRequest("smartwatches", req, res);
});
