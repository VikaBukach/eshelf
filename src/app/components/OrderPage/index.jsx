import style from "./Order.module.scss";
import { useState } from "react";
import { Delivery } from "./components/Delivery";
import { Payment } from "./components/Payment";
import { ContactDetails } from "./components/ContactDetails";

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
        </div>
      </div>
    </div>
  );
};
export { OrderPage };
