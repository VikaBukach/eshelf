import "./Delivery.scss";
import React, {useState, useEffect, useRef} from 'react';


const WarrantyDelivery = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const refHeight = useRef([]);

   const toggleQuestion = (index) => {
       setActiveQuestion(activeQuestion === index ? null : index);
   }

    return (
        <div className="delivery-to-user-content">
            <div className="delivery-to-user">
                <button
                    className="delivery-to-user-btn-visible"
                    onClick={() => toggleQuestion(0)}
                >
                    <span>How to place an order?</span>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 18.75L16.375 12L9.625 5.25" stroke="#333333" strokeWidth="0.872238"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div
                    className={activeQuestion === 0 ? "delivery-to-user-btn-toggle animated" : "delivery-to-user-btn-toggle"}
                    style={{ height: activeQuestion === 0 ? `${refHeight.current[0]}px` : "0px" }}
                    ref={(el) => {refHeight.current[0] = el ? el.scrollHeight : 0 }}
                >
                    <div aria-hidden={activeQuestion ? "true" : "false"}>
                        <p className="delivery-to-user-text">You can place an order on the site allo.ua around the
                            clock.
                            <p>We will not disturb you and make phone calls if you do not wish to contact us.</p>
                            <p>In the near future you will receive a notification with information on the order, or our
                                partner will contact you shortly to clarify the data on the order.</p>
                        </p>
                        <p className="delivery-to-user-text">For any questions, you can always contact us by phone 0
                            (800) 300-100 (free of charge) or
                            write to us in the chat, we will answer you very soon.</p>
                        <div className="delivery-to-user-posts">
                            <img src="/img/icons_profile/Nova_Poshta_202ч2_logo 1.svg" alt="img"/>
                            <h6>Nova Poshta</h6>
                        </div>
                        <p className="delivery-to-user-text">In the period from 11/17/22 to 01/31/23, when delivering
                            goods to the Nova Poshta post
                            office, the
                            following tariffs apply:
                        </p>
                        <ul className="delivery-to-user-list">
                            <li>order value up to <span>500 UAH</span> - the tariff is valid
                            </li>
                            <li>order value from <span>500 UAH</span> – tariff 0 UAH.
                            </li>
                        </ul>
                        <p className="delivery-to-user-text">For one product from the categories of medium or small
                            household appliances, costing up to
                            10,000
                            UAH. and weighing up to 20 kg</p>
                        <div className="delivery-to-user-posts">
                            <img src="/img/icons_profile/1200px-Ukrposhta-ua 1.svg" alt="img"/>
                            <h6>Ukr Poshta</h6>
                        </div>
                        <ul className="delivery-to-user-list">
                            <li>order value up to <span>500 UAH</span> - the tariff is valid
                            </li>
                            <li>order value from <span>500 UAH</span> – tariff 35 UAH.
                            </li>
                        </ul>
                        <p className="delivery-to-user-text">For one product from the categories of medium or small
                            household appliances, costing up to
                            10,000
                            UAH. and weighing up to 20 kg</p>
                    </div>
                </div>
            </div>


            <div className="delivery-to-user">
                <button
                    className="delivery-to-user-btn-visible"
                    onClick={() => toggleQuestion(1)}
                >
                    <span>How to get the goods?</span>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 18.75L16.375 12L9.625 5.25" stroke="#333333" strokeWidth="0.872238"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div
                    className={activeQuestion === 1 ? "delivery-to-user-btn-toggle animated" : "delivery-to-user-btn-toggle"}
                    style={{height: activeQuestion === 1 ? `${refHeight.current[1]}` : "0px"}}
                    ref={(el) => {refHeight.current[1] = el ? el.scrollHeight : 0 }}
                >
                    <div className="content" aria-hidden={activeQuestion === 1 ? "true" : "false"}>
                        <p className="delivery-to-user-text"> <span>Browse Products:</span> Start by browsing the products available
                            in the store. You can navigate through different categories or use the search feature to
                            find specific items.</p>
                        <p className="delivery-to-user-text"><span>Select Product:</span> Once you find the product you want to
                            purchase, click on it to view more details. Make sure to check the product description, images, and specifications to
                            ensure it meets your requirements.</p>
                        <p className="delivery-to-user-text"><span>Add to Cart:</span> Add to Cart: If you decide to buy the product, click on the
                            "Add to Cart" button. You can continue shopping and add more items to your cart if needed.</p>
                        <p className="delivery-to-user-text"><span>Review Cart:</span> After adding all desired items to your
                            cart, review your cart to make sure everything is correct. You can adjust quantities or
                            remove items if necessary.</p>
                        <p className="delivery-to-user-text"><span>Proceed to Checkout:</span> When you're ready to place your
                            order, proceed to the checkout page. Here, you'll need to provide your shipping address,
                            select a shipping method, and choose a payment option.</p>
                        <p className="delivery-to-user-text"><span>Complete Payment:</span> Follow the prompts to complete the payment for your order. You may need to
                        enter your payment details, such as credit card information or use an online payment service </p>
                        <p className="delivery-to-user-text"><span>Place Order: </span>Once your payment is processed successfully,
                            review your order one last time and then click on the "Place Order" or "Complete Purchase" button to finalize your purchase.</p>
                        <p className="delivery-to-user-text"><span>Track Order (Optional):</span> If the store provides order
                            tracking, you can use the order number from your confirmation email to track the status of your shipment and see estimated delivery
                            times.</p>
                        <p className="delivery-to-user-text"><span>Receive Goods:</span> Finally, wait for your goods to be delivered
                            to your specified shipping address. Once they arrive, inspect the package to ensure everything is in good
                            condition.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default WarrantyDelivery;