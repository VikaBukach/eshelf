import React from "react";
import Button from "../../Button/Button";
import "./PopularCategory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

function PopularCategory() {

  return (
    <>
      <div className="popular_category container">
        <h1 className="popular_category-title">Popular category </h1>
        <div className="popular_category-btn">
          <NavLink to="/smartphones">
            <Button
              btnClass="popular_category-btn-smartpnones"
              svg={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.9999 2.99939H6.99988C6.44759 2.99939 5.99988 3.4471 5.99988 3.99939V20.9994C5.99988 21.5517 6.44759 21.9994 6.99988 21.9994H16.9999C17.5522 21.9994 17.9999 21.5517 17.9999 20.9994V3.99939C17.9999 3.4471 17.5522 2.99939 16.9999 2.99939Z"
                    stroke="#8119B1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9.99976 20.0012H13.9998" stroke="#8119B1" strokeLinecap="round" />
                </svg>
              }
              text={"Smartphones"}
            />
          </NavLink>
          <NavLink to="/monitors">
            <Button
              btnClass="popular_category-btn-components"
              svg={
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.0866 5H5.9C4.22 5 3.6 6.6 3.5 7.4V14.6C3.5 16.52 5.1 17 5.9 17H19.1C21.02 17 21.5 15.4 21.5 14.6V7.4C21.5 5.72 19.8911 5.1 19.0866 5Z"
                    stroke="#8119B1"
                  />
                  <path d="M14.3 17V20" stroke="#8119B1" />
                  <path d="M10.7 17V20" stroke="#8119B1" />
                  <path d="M8.29993 20H16.6999" stroke="#8119B1" strokeLinecap="round" />
                </svg>
              }
              text={"Monitors"}
            />
          </NavLink>
          <NavLink to="/tablets">
            <Button
              btnClass="popular_category-btn-tablets"
              svg={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.4999 17.4996L21.4999 7.49957C21.4999 6.94729 21.0522 6.49957 20.4999 6.49957L3.49988 6.49957C2.94759 6.49957 2.49988 6.94729 2.49988 7.49957L2.49988 17.4996C2.49988 18.0519 2.94759 18.4996 3.49988 18.4996L20.4999 18.4996C21.0522 18.4996 21.4999 18.0519 21.4999 17.4996Z"
                    stroke="#8119B1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9.99976 17H13.9998" stroke="#8119B1" strokeLinecap="round" />
                </svg>
              }
              text={"Tablets"}
            />
          </NavLink>
          <NavLink to="/smartwatches">
            <Button
              btnClass="popular_category-btn-others"
              svg={
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.25 10.2914L12 17.0414L18.75 10.2914"
                    stroke="#8119B1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text={"Smartwatches"}
            />
          </NavLink>
        </div>

        <ul className="popular_category-items">
          <NavLink to={"/smartphones"}>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/smartf.png" alt="Smartphones" />
            <h4 className="popular_category-title">Smartphones</h4>
          </li>
        </NavLink>
          <NavLink to={"/headphones"}>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/headphone.png" alt="Headphones" />
            <h4 className="popular_category-title">Headphones</h4>
          </li>
        </NavLink>
          <NavLink to={"/tablets"}>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/tablets.png" alt="Tablets" />
            <h4 className="popular_category-title">Tablets</h4>
          </li>
          </NavLink>
          <NavLink to="/smartwatches">
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/smartw.png" alt="Smartwatches" />
            <h4 className="popular_category-title">Smartwatches</h4>
          </li>
          </NavLink>
          <NavLink to="/laptops">
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/mac.png" alt="img" />
            <h4 className="popular_category-title">Laptops</h4>
          </li>
          </NavLink>
          <NavLink to="/quadcopters">
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/quadro.png" alt="Quadrocopters" />
            <h4 className="popular_category-title">Quadrocopters</h4>
          </li>
          </NavLink>

        </ul>
      </div>
    </>
  );
}

export default PopularCategory;
