import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs" aria-label="breadcrumbs">
      <img className="breadcrumbs__home-img" src="../assets/icons/home-page.svg" alt="Icon" />
      <Link to="/">Home</Link>
      <img className="breadcrumbs__back-img" src="../assets/icons/back.svg" alt="Icon" />
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name} className={`breadcrumbs__item${isLast ? " breadcrumbs__item--active" : ""}`}>
            {isLast ? name : <Link to={routeTo}>{name}</Link>}
          </span>
        );
      })}
    </nav>
  );
};

export { Breadcrumbs };
