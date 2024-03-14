import React from "react";

const CatalogPagination = () => {
  return <div className="pagination">
    <ul className="pagination__pages-numbers">
        <li className="pagination__page-number pagination__page-number--active">1</li>
        <li className="pagination__page-number">2</li>
        <li className="pagination__page-number">3</li>
        <li className="pagination__page-number">4</li>
    </ul>
  </div>;
};

export { CatalogPagination };
