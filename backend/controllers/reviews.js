const Review = require("../models/Review");

const createReview = async (req, res) => {
  const reviewData = req.body;
  const data = { ...reviewData, createdAt: new Date(Date.now()).toISOString() };
  try {
    await Review.create(data);

    const count = await Review.countDocuments({
      productId: reviewData.productId,
    });
    const result = await Review.find({
      productId: reviewData.productId,
    });
    const avg = Math.round(
      result.reduce((prev, curr) => {
        return +prev + +curr.rating;
      }, 0) / count
    );

    res.status(201).send({ ...data, newAvgRating: avg });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

const loadReviews = async (req, res) => {
  const { productId, skip, take } = req.query;
  try {
    const result = await Review.find({
      productId,
    })
      .limit(+take)
      .skip(+skip)
      .sort([["createdAt", -1]]);

    const count = await Review.countDocuments({
      productId,
    });
    res.status(200).send({
      reviews: result,
      total: count,
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

const loadReviewsTotals = async (req, res) => {
  const { productId } = req.query;
  try {
    const count = await Review.countDocuments({
      productId,
    });
    const result = await Review.find({
      productId,
    });
    const avg = Math.round(
      result.reduce((prev, curr) => {
        return +prev + +curr.rating;
      }, 0) / count
    );
    res.status(200).send({
      avgRating: avg,
      reviewsCount: count,
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

module.exports = { createReview, loadReviews, loadReviewsTotals };
