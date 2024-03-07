const express = require("express");
const { createReview, loadReviews, loadReviewsTotals } = require("../controllers/reviews");

const router = express.Router();

router.get("/getProductReview", loadReviews);
router.get("/getProductReviewTotals", loadReviewsTotals);
router.post("/postProductReview", createReview);

module.exports = router;
