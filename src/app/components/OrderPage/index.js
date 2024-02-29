import style from "./Order.module.scss";
import { useEffect, useState } from "react";
import { Delivery } from "./components/Delivery";
import { Payment } from "./components/Payment";
import { ContactDetails } from "./components/ContactDetails";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/slices/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

export const validateEmail = (email) => {
  const basicEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return basicEmailRegex.test(email);
};

const cartState = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  city: "",
  deliveryMethod: "",
  paymentMethod: "",
};

const OrderPage = () => {
  const [state, setState] = useState({ ...cartState });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const cart = useSelector((state) => state.cart.data);

  const isFormComplete = () => {
    const { name, surname, phone, email, city, deliveryMethod, paymentMethod } = state;
    return name && surname && phone && email && city && deliveryMethod && paymentMethod && cart.length !== 0;
  };

  useEffect(() => {
    setButtonDisabled(!isFormComplete() || !validateEmail(state.email));
  }, [state]);

  const CartItem = ({ item }) => {
    return (
      <div className={style.product}>
        <div className={style.productImage}>
          <img src={item.imageURL} alt={item.title} />
        </div>
        <div className={style.productContent}>
          <h3 className={style.heading}>{item.title}</h3>
          <p>&times; {item.quantity}</p>
          <div className={style.productQuantity}>
            <div className={style.quantity}>
              <div className={style.price}>{formatPrice(+item.price * +item.quantity)} ₴</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const { active, close, open } = useModal();

  const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalProductsQuantity = cart.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    const totalProductsPrice = cart.reduce((prev, curr) => {
      return prev + curr.quantity * curr.price;
    }, 0);

    const plural = (text, num) => {
      return num > 1 ? text + `s` : text;
    };

    const DELIVERY_COST = 120;

    return (
      <>
        <div className={style.cart}>
          <h3>Total payable</h3>
          <div>
            <p>
              {totalProductsQuantity} {plural("product", totalProductsQuantity)} for the amount of
            </p>
            <span>{formatPrice(totalProductsPrice)} ₴</span>
          </div>
          <div>
            <p>The cost of delivery</p>
            <span>{formatPrice(DELIVERY_COST)} ₴</span>
          </div>

          <div className={style.totals}>
            <p>Total</p>
            <span>{formatPrice(totalProductsPrice + DELIVERY_COST)} ₴</span>
          </div>
          <button onClick={open} className="primary-btn" disabled={buttonDisabled}>
            <img src="" alt="" />
            <span>Buy now</span>
          </button>
          <p>
            By confirming the order, I accept{" "}
            <a href="">the terms of the regulation on the collection and protection of personal data</a>
          </p>
        </div>
        <Modal
          active={active}
          onClose={() => {
            dispatch(clearCart());
            setState({ ...cartState });
            close();
          }}
          wrapperStyles={style.successModalWrapper}
        >
          {
            <div className={style.successModal}>
              <div className={style.successIcon}>
                <img src="../../../assets/icons/arrow-back-large.svg" alt="" />
              </div>

              <h4>You have successfully ordered the product</h4>

              <ul>
                {cart.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>

              <button
                onClick={() => {
                  dispatch(clearCart());
                  setState({ ...cartState });
                  navigate("/");
                }}
                className={"primary-btn"}
              >
                <img src="../../../assets/icons/arrow-back-small.svg" alt="" />
                <span>Back to products</span>
              </button>
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

        <div className={style.cartTotals}>
          <div className={style.cartTotalsList}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
};
export { OrderPage };
