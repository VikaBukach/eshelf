import { classNames } from "../../../utils/classNames";
import "./Pagination.scss";
const Pagination = ({ items, perPage, activePage, setActivePage }) => {
  const buttons = [];

  for (let i = 1; i <= Math.ceil(items / perPage); i++) {
    buttons.push(i);
  }

  return (
    <div className="pagination-wrapper">
      {buttons.map((page, idx) => (
        <button
          key={idx}
          onClick={() => setActivePage(page)}
          className={classNames("pagination-button", page == activePage ? "active" : "")}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
