import "./ReviewCard.scss";
import { formatDateToDDMMYYYY } from "../../../utils/formatDate";

const ReviewCard = ({ review }) => {
  return (
    <div className="card-product-review">
      <div className="card-product-review__header">
        <div className="card-product-review__header-left">
          <p className="card-product-review__user-name card-product-review__title">{review.userName}</p>
          <div style={{ "--rating": review.rating }} className="star-rating"></div>
        </div>
        <div className="card-product-review__header-right">
          <p className="card-product-review__date">{formatDateToDDMMYYYY(review.createdAt)}</p>
        </div>
      </div>
      <div className="card-product-review__content">
        <p className="card-product-review__text-main">{review.feedback}</p>
        {review.advantages && <p className="card-product-review__title">Advantages:</p>}
        {review.advantages && <p className="card-product-review__text-main">{review.advantages}</p>}
        {review.disadvantages && <p className="card-product-review__title">Disadvantages:</p>}
        {review.disadvantages && <p className="card-product-review__text-main">{review.disadvantages}</p>}
      </div>
    </div>
  );
};

export { ReviewCard };
