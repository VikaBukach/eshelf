import { useEffect, useRef, useState } from "react";
import { ReviewCard } from "./components/ReviewCard";
import "./ReviewsProduct.scss";
import Rating from "./components/Rating";
import Pagination from "./components/Pagination";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewsProduct = ({ productId, totalReviews, setTotalReviews }) => {
  const [params, setParams] = useSearchParams();
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(params.get("page") || 1);
  //const [totalReviews, setTotalReviews] = useState(0);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const user = useSelector((state) => state.user.data);

  const formRef = useRef();

  const ITEMS_PER_PAGE = 4;
  const PORT = process.env.REACT_APP_PORT || 5000;
  const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

  const onPageChange = (page) => {
    setPage(page);
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  useEffect(() => {
    const getReviews = async () => {
      const searchParams = new URLSearchParams({
        skip: (page - 1) * ITEMS_PER_PAGE,
        take: ITEMS_PER_PAGE,
      });
      const reviews = await axios.get(`${REACT_APP_BACK_URL}:${PORT}/getProductReview?${searchParams.toString()}`, {
        params: {
          productId,
        },
      });

      setReviews(reviews.data?.reviews);
      setTotalReviews(reviews.data?.total);
      setLoading(false);
    };

    if (!submitting) {
      getReviews();
    }
  }, [page, submitting]);

  const sendReview = async (data) => {
    setSubmitting(true);
    try {
      const res = await axios.post(`${REACT_APP_BACK_URL}:${PORT}/postProductReview`, {
        userName: user ? `${user.name} ${user.surname}` : "Guest",
        ...data,
        productId,
      });

      formRef.current.reset();
      setRating(0);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="tab-product-review">
      <div className="tab-product-review__card-list">
        {loading ? (
          <div className="loader"></div>
        ) : (
          reviews.map((review, idx) => <ReviewCard key={idx} review={review} />)
        )}

        <Pagination activePage={page} setActivePage={onPageChange} items={totalReviews} perPage={ITEMS_PER_PAGE} />
      </div>
      <div className="tab-product-review__form">
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            sendReview(Object.fromEntries(new FormData(e.target)));
          }}
          action=""
        >
          <div>
            <label htmlFor="">Feedback about the product</label>

            <div className="tab-product-review__rating">
              <Rating size={32} value={rating} setValue={setRating} />
            </div>
            <input name="rating" onChange={() => {}} hidden={true} value={rating} />
          </div>
          <div>
            <label htmlFor="adv">Advantages:</label>
            <input required id="adv" placeholder="Advantages" name="advantages" type="text" />
          </div>
          <div>
            <label htmlFor="disadv">Disadvantages:</label>
            <input required id="disadv" placeholder="Disadvantages" name="disadvantages" type="text" />
          </div>
          <div>
            <label htmlFor="feedback">Feedback</label>
            <textarea
              required={true}
              name="feedback"
              placeholder="Feedback"
              id="feedback"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" disabled={submitting || rating < 1} className="primary-btn">
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.5L5.28571 13.25L16 1.375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span>Leave a review</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export { ReviewsProduct };
