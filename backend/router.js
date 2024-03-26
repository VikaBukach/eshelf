const reviewRouter = require("./routes/productReviews");
const authRouter = require("./routes/auth");
const orderRouter = require("./routes/order");
const userInfoRouter = require("./routes/user");
const products = require("./routes/products");
const fillTheFilterRouter =  require("./routes/fillTheFilter");
const minAndMaxPriceRouter = require("./routes/minAndMaxPrice");

module.exports = {
  reviewRouter,
  authRouter,
  orderRouter,
  userInfoRouter,
  products,
  minAndMaxPriceRouter,
  fillTheFilterRouter
};
