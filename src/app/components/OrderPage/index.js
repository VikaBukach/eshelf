import "./Order.scss";
import { useCallback, useEffect, useState } from "react";
import { Delivery } from "./components/Delivery";
import { Payment } from "./components/Payment";
import { ContactDetails } from "./components/ContactDetails";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/slices/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { setOrderNumber } from "../../store/slices/orderSlice";

export const validateEmail = (email) => {
  const basicEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return basicEmailRegex.test(email);
};

const CartItem = ({ item }) => {
  return (
    <div className={"orderPage__product"}>
      <div className={"orderPage__productImage"}>
        <img src={item.imageURL} alt={item.title} />
      </div>
      <div className={"orderPage__productContent"}>
        <h3 className={"orderPage__heading"}>{item.title}</h3>
        <p>&times; {item.quantity}</p>
        <div className={"orderPage__productQuantity"}>
          <div className={"orderPage__quantity"}>
            <div className={"orderPage__price"}>{formatPrice(+item.price * +item.quantity)} $</div>
          </div>
        </div>
      </div>
    </div>
  );
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
  const orderNumber = useSelector((state) => state.order.orderNumber); // add order number

  const isFormComplete = () => {
    const { name, surname, phone, email, city, deliveryMethod, paymentMethod } = state;
    return name && surname && phone && email && city && deliveryMethod && paymentMethod && cart.length !== 0;
  };

  useEffect(() => {
    setButtonDisabled(!isFormComplete() || !validateEmail(state.email));
  }, [state]);

  const { active, close, open } = useModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Cart = useCallback(() => {
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

    const generateRandomOrderNumber = () => {
      return Math.floor(1000000 + Math.random() * 9000000); //generation number
    };

    const handleBuyOpen = () => {
      //fn adding order number
      const randomOrderNumber = generateRandomOrderNumber();
      dispatch(setOrderNumber(randomOrderNumber));
      open();
    };

    return (
      <>
        <div className={"orderPage__cart"}>
          <h3>Total payable</h3>
          <div>
            <p>
              {totalProductsQuantity} {plural("product", totalProductsQuantity)} for the amount of
            </p>
            <span>{formatPrice(totalProductsPrice)} $</span>
          </div>
          <div>
            <p>The cost of delivery</p>
            <span>{formatPrice(DELIVERY_COST)} $</span>
          </div>

          <div className={"orderPage__totals"}>
            <p>Total</p>
            <span>{formatPrice(totalProductsPrice + DELIVERY_COST)} $</span>
          </div>
          <button
            // onClick={open}
            onClick={handleBuyOpen}
            className="primary-btn"
            disabled={buttonDisabled}
          >
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
          wrapperStyles={"orderPage__successModalWrapper"}
        >
          {
            <div className={"orderPage__successModal"}>
              <div className={"orderPage__successIcon"}>
                <img src="../../../assets/icons/arrow-back-large.svg" alt="" />
              </div>

              <h4>You have successfully ordered the product</h4>

              <p>Your order number: {orderNumber}</p>

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
  });

  return (
    <div className="container">
      <h1 className={"orderPage__pageTitle"}>Details</h1>
      <div className={"orderPage__content"}>
        <div className={"orderPage__form"}>
          <div>
            <h2 data-index="1" className={"orderPage__sectionTitle"}>
              Your contact details
            </h2>
            <ContactDetails setState={setState} state={state} />
          </div>
          <div>
            <h2 data-index="2" className={"orderPage__sectionTitle"}>
              Delivery
            </h2>
            <Delivery setState={setState} state={state} />
          </div>

          <div>
            <h2 data-index="3" className={"orderPage__sectionTitle"}>
              Payment
            </h2>
            <Payment setState={setState} state={state} />
          </div>
        </div>

        <div className={"orderPage__cartTotals"}>
          <div className={"orderPage__cartTotalsList"}>
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
