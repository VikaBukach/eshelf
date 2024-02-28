import React from "react";
import { ReactComponent as CartIcon } from "../../../assets/images/Cart.svg";

const ButtonBuy = () => {
  return (
    <div className="button-buy">
      <CartIcon className="button-buy__icon" />
      <span>Buy now</span>
    </div>
  );
};

export { ButtonBuy };
