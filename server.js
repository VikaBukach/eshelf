const env = require("dotenv");
env.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDb, getDb } = require("./db");
const { reviewRouter, authRouter, orderRouter, userInfoRouter } = require("./backend/router");

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

const handleCollectionRequest = (collection, req, res, limit, sortingMode = "Best Seller") => {
  const page = parseInt(req.query.page) || 1;
  const actualLimit = limit ? parseInt(limit) : 100000;
  const skip = (page - 1) * actualLimit;

  let sortQuery = {};
  let sortKey;

  switch (sortingMode) {
    case "From cheap":
      sortKey = "colors.0.products.0.price";
      sortQuery[sortKey] = 1;
      break;
    case "From expensive":
      sortKey = "colors.0.products.0.price";
      sortQuery[sortKey] = -1;
      break;
    default:
      sortQuery = { model: 1 };
      break;
  }

  db.collection(collection)
    .find()
    .sort(sortQuery)
    .skip(skip)
    .limit(actualLimit)
    .toArray()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch(() => {
      res.status(500).json({ error: "Something goes wrong..." });
    });
};

app.get("/e-readers", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("e-readers", req, res, limit, sortingMode);
});

app.get("/smartphones", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("smartphones", req, res, limit, sortingMode);
});

app.get("/portable-speakers", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("portable_speakers", req, res, limit, sortingMode);
});

app.get("/laptops", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("laptops", req, res, limit, sortingMode);
});

app.get("/monitors", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("monitors", req, res, limit, sortingMode);
});

app.get("/smartwatches", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("smartwatches", req, res, limit, sortingMode);
});

app.get("/mouses", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("mouses", req, res, limit, sortingMode);
});

app.get("/quadcopters", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("quadcopters", req, res, limit, sortingMode);
});

app.get("/headphones", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("headphones", req, res, limit, sortingMode);
});

app.get("/tablets", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("tablets", req, res, limit, sortingMode);
});

app.get("/tv", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("tv", req, res, limit, sortingMode);
});

app.get("/smartphones", (req, res) => {
  const { limit, sortingMode } = req.query;
  handleCollectionRequest("smartphones", req, res, limit, sortingMode);
});

app.get("/especiallyforyou", (req, res) => {
  handleCollectionRequest("especiallyforyou", req, res);
});

app.use(reviewRouter);
app.use(authRouter);
app.use(orderRouter);
app.use(userInfoRouter);
