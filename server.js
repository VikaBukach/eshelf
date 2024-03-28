const cors = require("cors");
const {
  reviewRouter,
  authRouter,
  orderRouter,
  userInfoRouter,
  minAndMaxPriceRouter,
  fillTheFilterRouter,
  loadOnePageOfProductsRouter,
  loadOneProductRouter,
} = require("./backend/router");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://finalprojectfe23:finalprojectfe23@project.x9zghkg.mongodb.net/products";

const app = express();

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/get-min-and-max-prices", minAndMaxPriceRouter);
app.use("/fill-the-filter", fillTheFilterRouter);
app.use("/load-one-page-of-products", loadOnePageOfProductsRouter);
app.use("/load-one-product", loadOneProductRouter);

app.use(reviewRouter);
app.use(authRouter);
app.use(orderRouter);
app.use(userInfoRouter);
