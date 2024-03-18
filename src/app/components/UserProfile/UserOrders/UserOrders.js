import React from "react";
import "./UserOrders.scss";
import { useSelector } from "react-redux";

const UserOrders = () => {
    const orderNumber = useSelector((state) => state.order.orderNumber);
    const orderDate = useSelector((state) => state.order.orderDate);
    const formattedOrderDate = orderDate ? new Date(orderDate).toLocaleString() : "";

  return (
    <div className="user-orders">
      <h3 className="user-orders-title">Order N {orderNumber}</h3>
      <span className="user-orders-dayoforder">{formattedOrderDate}</span>
      <ul className="user-orders-info-items">
        <li className="user-orders-info-item">
          <h6 className="user-orders-info-title">Payment method:</h6>
          <p className="user-orders-info-text">Payment method:</p>
        </li>

        <li className="user-orders-info-item">
          <h6 className="user-orders-info-item-title">Delivery</h6>
          <p className="user-orders-info-item-text">Vinnytsia / Department No. 5 (up to 30 kg): str. Keletska, 83</p>
        </li>
        <li className="user-orders-info-item">
          <h6 className="user-orders-info-item-title">Invoice number:</h6>
          <p className="user-orders-info-item-text">2040012267379</p>
        </li>
        <li className="user-orders-info-item">
          <h6 className="user-orders-info-itemtitle">Status:</h6>
          <p className="user-orders-info-item-text">Received</p>
        </li>
      </ul>
      <ul className="user-orders-status-items">
        <li className="user-orders-status-item">
          <svg
            className="user-orders-status-svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66675 2.6665H26.6667V9.33317L16.6667 16.6665L6.66675 9.33317V2.6665Z"
              stroke="#8119B1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66675 30.6665H26.6667V23.9998L16.6667 16.6665L6.66675 23.9998V30.6665Z"
              stroke="#8119B1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="user-orders-status-item-date">{formattedOrderDate}</span>
          <p className="user-orders-status-item-descr">Awaiting processing</p>
        </li>

        <li className="user-orders-status-item">
          <svg
            className="user-orders-status-svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66675 11.9997C2.66675 10.5269 3.86065 9.33301 5.33341 9.33301H26.6667C28.1395 9.33301 29.3334 10.5269 29.3334 11.9997V26.6663C29.3334 28.1391 28.1395 29.333 26.6667 29.333H5.33341C3.86065 29.333 2.66675 28.1391 2.66675 26.6663V11.9997Z"
              stroke="#8119B1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3334 9.33317V5.33317C21.3334 3.86041 20.1395 2.6665 18.6667 2.6665H13.3334C11.8607 2.6665 10.6667 3.86041 10.6667 5.33317V9.33317"
              stroke="#8119B1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="user-orders-status-item-date">{formattedOrderDate}</span>
          <p className="user-orders-status-item-descr">Employed</p>
        </li>

        <li className="user-orders-status-item">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.9999 10L15.9999 4L10.6666 6.66667M27.9999 10V22L16.6666 28M27.9999 10L22.3333 12.6667M5.33325 9.33333L16.6666 15.3333M5.33325 9.33333V22L16.6666 28M5.33325 9.33333L10.6666 6.66667M16.6666 15.3333V28M16.6666 15.3333L22.3333 12.6667M10.6666 6.66667L22.3333 12.6667M22.3333 12.6667V17.3333"
              stroke="#8119B1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="user-orders-status-item-date">{formattedOrderDate}</span>
          <p className="user-orders-status-item-descr">Completed</p>
        </li>

        <li className="user-orders-status-item">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.9999 10L15.9999 4L10.6666 6.66667M27.9999 10V22L16.6666 28M27.9999 10L22.3333 12.6667M5.33325 9.33333L16.6666 15.3333M5.33325 9.33333V22L16.6666 28M5.33325 9.33333L10.6666 6.66667M16.6666 15.3333V28M16.6666 15.3333L22.3333 12.6667M10.6666 6.66667L22.3333 12.6667M22.3333 12.6667V17.3333"
              stroke="#8119B1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="user-orders-status-item-date">{formattedOrderDate}</span>
          <p className="user-orders-status-item-descr">Delivered to carrier</p>
        </li>

        <li className="user-orders-status-item">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.77497 21.9651H19.05C19.3152 21.9651 19.5695 21.8598 19.7571 21.6722C19.9446 21.4847 20.05 21.2304 20.05 20.9651V8.14014C20.05 7.87492 19.9446 7.62057 19.7571 7.43303C19.5695 7.24549 19.3152 7.14014 19.05 7.14014H4.33997C4.07475 7.14014 3.8204 7.24549 3.63286 7.43303C3.44532 7.62057 3.33997 7.87492 3.33997 8.14014V20.9551C3.33997 21.2204 3.44532 21.4747 3.63286 21.6622C3.8204 21.8498 4.07475 21.9551 4.33997 21.9551H5.63997"
              stroke="#8119B1"
            />
            <path
              d="M22.165 21.9652H20.095V11.6152H25C25.0722 11.6152 25.1436 11.6309 25.2092 11.6611C25.2748 11.6913 25.333 11.7354 25.38 11.7902L28.53 15.5652C28.6045 15.6552 28.6452 15.7684 28.645 15.8852V21.9652H26.5"
              stroke="#8119B1"
            />
            <path
              d="M7.76504 24.8652C8.99112 24.8652 9.98504 23.8579 9.98504 22.6152C9.98504 21.3726 8.99112 20.3652 7.76504 20.3652C6.53897 20.3652 5.54504 21.3726 5.54504 22.6152C5.54504 23.8579 6.53897 24.8652 7.76504 24.8652Z"
              stroke="#8119B1"
            />
            <path
              d="M24.2899 24.8652C25.516 24.8652 26.5099 23.8579 26.5099 22.6152C26.5099 21.3726 25.516 20.3652 24.2899 20.3652C23.0639 20.3652 22.0699 21.3726 22.0699 22.6152C22.0699 23.8579 23.0639 24.8652 24.2899 24.8652Z"
              stroke="#8119B1"
            />
          </svg>
          <span className="user-orders-status-item-date">{formattedOrderDate}</span>
          <p className="user-orders-status-item-descr">Delivered to the department</p>
        </li>

        <li className="user-orders-status-item">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18.4L10.8571 26L28 7" stroke="#8119B1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="user-orders-status-item-date">{formattedOrderDate}</span>
          <p className="user-orders-status-item-descr">Received</p>
        </li>
      </ul>

      <ul className="user-orders-total-items">
        <li className="user-orders-total-item">
          <h5>Total payable:</h5>
          <p>1 799</p>
        </li>
        <li className="user-orders-total-item">
          <h5>Your delivery:</h5>
          <p>99</p>
        </li>
        <li className="user-orders-total-item">
          <h5>Total:</h5>
          <p>₴ 1700</p>
        </li>
      </ul>
    </div>
  );
};

export default UserOrders;
