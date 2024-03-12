import React from "react";
import Button from "../../Button/Button";
import "./PopularCategory.scss";
function PopularCategory({ btnClass, onClick, text }) {
  return (
      <div className="popular_category">
        <h1 className="popular_category-title">Popular category </h1>
        <div className="popular_category-btn">
            <Button btnClass="popular_category-btn-smartpnones" onClick={onClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.9999 2.99939H6.99988C6.44759 2.99939 5.99988 3.4471 5.99988 3.99939V20.9994C5.99988 21.5517 6.44759 21.9994 6.99988 21.9994H16.9999C17.5522 21.9994 17.9999 21.5517 17.9999 20.9994V3.99939C17.9999 3.4471 17.5522 2.99939 16.9999 2.99939Z"
                        stroke="#8119B1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99976 20.0012H13.9998" stroke="#8119B1" stroke-linecap="round"/>
                </svg>
                {text}={"Smartphones"}
            </Button>

            <Button btnClass="popular_category-btn-smartpnones" onClick={onClick}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.0866 5H5.9C4.22 5 3.6 6.6 3.5 7.4V14.6C3.5 16.52 5.1 17 5.9 17H19.1C21.02 17 21.5 15.4 21.5 14.6V7.4C21.5 5.72 19.8911 5.1 19.0866 5Z"
                        stroke="#8119B1"/>
                    <path d="M14.3 17V20" stroke="#8119B1"/>
                    <path d="M10.7 17V20" stroke="#8119B1"/>
                    <path d="M8.29993 20H16.6999" stroke="#8119B1" stroke-linecap="round"/>
                </svg>
                {text}={"PC and components"}
            </Button>


        </div>
      </div>
  );
}


export default PopularCategory;
