const express = require('express');
const { connectToDb, getDb } = require('./db');


const PORT = 3000;
const app = express();

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

  app.get("/products", (req, res) => {
    const products = [];
  
    db
      .collection("smartphones")
      .find()
      .sort({ title: 1 })
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
