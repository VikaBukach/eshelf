import React from "react";

const CatalogPagination = ({onClickFunc}) => {
  return <div className="pagination">
    <ul className="pagination__pages-numbers">
        <li className="pagination__page-number pagination__page-number--active" onClick={onClickFunc}>Load more..</li>
    </ul>
  </div>;
};

export { CatalogPagination };
