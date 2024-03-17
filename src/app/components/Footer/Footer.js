import React from "react";

import { ReactComponent as PaymentPay } from "../../../assets/images/apple-pay.svg";
import { ReactComponent as PaymentVisa } from "../../../assets/images/visa.svg";
import { ReactComponent as PaymentMasterCard } from "../../../assets/images/mastercard.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__copyright">&copy; <span>All rights reserved</span> REGIMENT TRADE LLC, 2010–2024</div>
            <div className="footer__payments">
              <div className="footer__payments-item">
                <PaymentPay />
              </div>
              <div className="footer__payments-item">
                <PaymentVisa />
              </div>
              <div className="footer__payments-item">
                <PaymentMasterCard />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
