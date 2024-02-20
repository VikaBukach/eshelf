import style from "./Order.module.scss";
import { useState } from "react";
import { Delivery } from "./components/Delivery";
import { Payment } from "./components/Payment";
import { ContactDetails } from "./components/ContactDetails";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const OrderPage = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    city: "",
    deliveryMethod: "",
    paymentMethod: "",
  });

  const products = [
    {
      id: 1,
      name: "Test",
      price: 3333,
      quantity: 2,
      currency: "$",
      code: "1231432434",
      image:
        "https://media.istockphoto.com/id/1416053062/photo/smartphone.jpg?s=1024x1024&w=is&k=20&c=hfNjfGjiIahePqZMg3FDU3UehdRjFDaDMIKtCEIEvqw=",
    },
  ];

  const CartItem = ({ item }) => {
    return (
      <div className={style.product}>
        <div className={style.productImage}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={style.productContent}>
          <h3 className={style.heading}>{item.name}</h3>
          <p>Code: {item.code}</p>
          <div className={style.productQuantity}>
            <div className={style.quantity}>
              <div className={style.price}>
                {+item.price * +item.quantity} {item.currency}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Cart = () => {
    const { active, close, open } = useModal();

    return (
      <>
        <div className={style.cart}>
          <h3>Total payable</h3>
          <div>
            <p>{1} product for the amount of</p>
            <span>4676</span>
          </div>
          <div>
            <p>The cost of delivery</p>
            <span>0</span>
          </div>

          <div className={style.totals}>
            <p>Total</p>
            <span>343645</span>
          </div>
          <button onClick={open} className="primary-btn">
            <img src="" alt="" />
            <span>Buy now</span>
          </button>
          <p>
            By confirming the order, I accept{" "}
            <a href="">the terms of the regulation on the collection and protection of personal data</a>
          </p>
        </div>
        <Modal active={active} onClose={close} wrapperStyles={style.successModalWrapper}>
          {
            <div className={style.successModal}>
              <div className={style.successIcon}>
                <img src="../../../assets/icons/arrow-back-large.svg" alt="" />
              </div>

              <h4>You have successfully ordered the product</h4>

              <ul>
                <li>SAMSUNG Galaxy S22 Ultra 8/128GB Phantom Black</li>
              </ul>

              <Link to={"/"} className={"primary-btn"}>
                <img src="../../../assets/icons/arrow-back-small.svg" alt="" />
                <span>Back to products</span>
              </Link>
            </div>
          }
        </Modal>
      </>
    );
  };

  return (
    <div className="container">
      <h1 className={style.pageTitle}>Details</h1>
      <div className={style.pageOrder}>
        <div className={style.form}>
          <div>
            <h2 data-index="1" className={style.sectionTitle}>
              Your contact details
            </h2>
            <ContactDetails setState={setState} state={state} />
          </div>
          <div>
            <h2 data-index="2" className={style.sectionTitle}>
              Delivery
            </h2>
            <Delivery setState={setState} state={state} />
          </div>

          <div>
            <h2 data-index="3" className={style.sectionTitle}>
              Payment
            </h2>
            <Payment setState={setState} state={state} />
          </div>
        </div>

        <div>
          {products.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Cart />
        </div>
      </div>
    </div>
  );
};
export { OrderPage };
