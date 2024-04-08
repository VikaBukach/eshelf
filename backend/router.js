const reviewRouter = require("./routes/productReviews");
const authRouter = require("./routes/auth");
const orderRouter = require("./routes/order");
const userInfoRouter = require("./routes/user");
const fillTheFilterRouter =  require("./routes/fillTheFilter");
const minAndMaxPriceRouter = require("./routes/getMinAndMaxPrices");
const loadOnePageOfProductsRouter = require("./routes/loadOnePageOfProducts");
const loadOneProductRouter = require("./routes/loadOneProduct");

module.exports = {
  reviewRouter,
  authRouter,
  orderRouter,
  userInfoRouter,
  minAndMaxPriceRouter,
  fillTheFilterRouter,
  loadOnePageOfProductsRouter,
  loadOneProductRouter
};
