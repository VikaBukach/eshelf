const env = require("dotenv");
env.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDb, getDb } = require("./db");
const { reviewRouter } = require("./backend/router");

const PORT = process.env.REACT_APP_PORT || 5000;

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

app.get("/smartwatches", (req, res) => {
  handleCollectionRequest("smartwatches", req, res);
});

app.get("/mouses", (req, res) => {
  handleCollectionRequest("mouses", req, res);
});

app.get("/quadcopters", (req, res) => {
  handleCollectionRequest("quadcopters", req, res);
});

app.get("/tv", (req, res) => {
  handleCollectionRequest("tv", req, res);
});

app.get("/tablets", (req, res) => {
  handleCollectionRequest("tablets", req, res);
});

app.get("/headphones", (req, res) => {
  handleCollectionRequest("headphones", req, res);
});

app.use(reviewRouter);

