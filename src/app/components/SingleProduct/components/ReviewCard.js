import "./ReviewCard.scss";

function formatDateToDDMMYYYY(isoDate) {
  const date = new Date(isoDate);

  // Extract day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Format the date as 'DD.MM.YYYY'
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}

const ReviewCard = ({ review }) => {
  return (
    <div className="card-product-review">
      <div className="card-product-review__header">
        <div className="card-product-review__header-left">
          <p className="card-product-review__user-name card-product-review__title">Anton</p>
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
