const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');


const PORT = 5000;
const app = express();

app.use(cors());

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

  const handleCollectionRequest = ("/smartphones", (collection, req, res) => {
    const products = [];
  
    db
      .collection(collection)
      .find()
      .sort({ model: 1 })
      .forEach((product) => products.push(product))
      .then(() => {
        res
          .status(200)
          .json(products);
      })
      .catch(() => {
        res
          .status(500)
          .json({ error: "Something goes wrong..." })
      })
  });


  app.get("/smartphones", (req, res) => {
    handleCollectionRequest("smartphones", req, res);
  });

  app.get("/laptops", (req, res) => {
    handleCollectionRequest("laptops", req, res);
  });