import React from "react";

const CatalogPagination = ({onClickFunc}) => {
  return <div className="pagination">
        <button className="pagination__load-more-btn pagination__load-more-btn--active" onClick={onClickFunc}>Load more..</button>
  </div>;
};

export { CatalogPagination };
