import React from 'react'
import { ReactComponent as AboutVisaIcon } from "../../../assets/images/product-icons/visa.svg";
import { ReactComponent as AboutGooglePayIcon } from "../../../assets/images/product-icons/google-pay.svg";
import { ReactComponent as AboutApplePayIcon } from "../../../assets/images/product-icons/apple-pay.svg";
import { ReactComponent as AboutMastercardIcon } from "../../../assets/images/product-icons/mastercard.svg";

const WeAccept = () => {
  return (
    <div className="info-details__wrap">
      <div className="info-details__header">We accept</div>
      <div className="info-details__accept-block">
        <div className="info-details__accept-item">
          <AboutVisaIcon />
        </div>
        <div className="info-details__accept-item">
          <AboutGooglePayIcon />
        </div>
        <div className="info-details__accept-item">
          <AboutApplePayIcon />
        </div>
        <div className="info-details__accept-item">
          <AboutMastercardIcon />
        </div>
      </div>
    </div>
  );
}

export { WeAccept }
