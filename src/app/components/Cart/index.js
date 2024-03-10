import { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import style from "./Cart.module.scss";
import { useModal } from "../../hooks/useModal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementProductQuantity, incrementProductQuantity } from "../../store/slices/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { setCartTotal } from "../../store/slices/navMenuSlice"; // додав обчислення загальної суми


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increase = (id) => {
    dispatch(incrementProductQuantity(id));
  };

  const decrease = (id) => {
    dispatch(decrementProductQuantity(id));
  };

  return (
    <div className={style.product}>
      <div className={style.productImage}>
        <img src={item.imageURL} alt={item.title} />
      </div>
      <div className={style.productContent}>
        <h3 className={style.heading}>{item.title}</h3>
        {/* <p>Code: {item.code}</p> */}
        <div className={style.productQuantity}>
          <div className={style.price}>{formatPrice(item.price)} ₴</div>
          <div className={style.quantity}>
            <div className={style.quantityControllers}>
              <div onClick={() => decrease(item.id)}>-</div>
              <span>{item.quantity}</span>
              <div onClick={() => increase(item.id)}>+</div>
            </div>
            <div className={style.price}>
              {formatPrice(+item.price * +item.quantity)} {item.currency} ₴
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ activator }) => {
  const cart = useSelector((state) => state.cart.data);
  const { active, open, close } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // додав обчислення загальної суми

  const footerRef = useRef();
  const headerRef = useRef();

  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price;
  }, 0);

// додав обчислення загальної суми
  useEffect(() => {
    dispatch(setCartTotal(totalPrice));
  }, [dispatch, totalPrice]);

  const footerElement =  (
    <div ref={footerRef}>
      <span className={style.line}></span>
      <div className={style.footer}>
        <p className={style.price}>{formatPrice(totalPrice)} ₴</p>
        <button
          disabled={!cart.length}
          onClick={() => {
            navigate("/order");
            close();
          }}
          className="primary-btn"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const headerElement = (
    <div ref={headerRef} className={style.header}>
      <p className={style.heading}>Basket</p>
    </div>
  );

  const [listHeight, setListHeight] = useState(null);

  useEffect(() => {
    if (headerRef.current && footerRef.current) {
      const headerH = headerRef.current.clientHeight;
      const footerH = footerRef.current.clientHeight;

      const getListHeight = (windowH) => {
        const res = windowH * 0.9 - 2 * 23 - headerH - footerH;
        setListHeight(res <= 0 ? null : res);
      };

      const resize = window.addEventListener("resize", () => {
        getListHeight(window.innerHeight);
      });

      getListHeight(window.innerHeight);

      return () => window.removeEventListener("resize", resize);
    }
  }, [headerRef, footerRef]);

  const contentElement = (
    <div
      style={{
        maxHeight: listHeight ? `${listHeight}px` : "auto",
      }}
      className={style.list}
    >
      {cart.length === 0 ? (
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Cart is empty!
        </h2>
      ) : null}
      {cart.map((product) => (
        <CartItem key={product.id} item={product} />
      ))}
    </div>
  );

  return (
    <>
      <div onClick={open}>{activator}</div>
      <Modal
        active={active}
        onClose={close}
        header={headerElement}
        footer={footerElement}
        wrapperStyles={style.cartWrapper}
      >
        {contentElement}
      </Modal>
    </>
  );
};

export default Cart;
