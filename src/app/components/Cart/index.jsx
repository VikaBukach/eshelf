import { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import style from "./Cart.module.scss";
import { useModal } from "../../hooks/useModal";

const products = [];

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
          <div className={style.price}>
            {item.price} {item.currency}
          </div>
          <div className={style.quantity}>
            <div className={style.quantityControllers}>
              <div>-</div>
              <span>{item.quantity}</span>
              <div>+</div>
            </div>
            <div className={style.price}>
              {+item.price * +item.quantity} {item.currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ activator }) => {
  const footerRef = useRef();
  const headerRef = useRef();

  const footerElement = (
    <div ref={footerRef}>
      <span className={style.line}></span>
      <div className={style.footer}>
        <p className={style.price}>499$</p>
        <button className={style.btn}>Continue</button>
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
      {products.length === 0 ? (
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Cart is empty!
        </h2>
      ) : null}
      {products.map((product) => (
        <CartItem key={product.id} item={product} />
      ))}
    </div>
  );

  const { active, open, close } = useModal();

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
