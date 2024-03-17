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
                    style={{height: activeQuestion === 0 ? `${refHeight.current[0]}px` : "0px"}}
                    ref={(el) => {
                        refHeight.current[0] = el ? el.scrollHeight : 0
                    }}
                >
                    <div aria-hidden={activeQuestion ? "true" : "false"}>
                        <p className="delivery-to-user-text">You can place an order on the site aShelf around the
                            clock.
                            <p>We will not disturb you and make phone calls if you do not wish to contact us.</p>
                            <p>In the near future you will receive a notification with information on the order, or our
                                partner will contact you shortly to clarify the data on the order.</p>
                        </p>
                        <p className="delivery-to-user-text">For any questions, you can always contact us by phone 0
                            (800) 300-100 (free of charge) or write to us in the chat, we will answer you very soon.</p>
                        <div className="delivery-to-user-posts">
                            <img src="/img/icons_profile/Nova_Poshta_202ч2_logo 1.svg" alt="img"/>
                            <h6>Nova Poshta</h6>
                        </div>
                        <p className="delivery-to-user-text">In the period from 11/17/22 to 01/31/23, when delivering
                            goods to the Nova Poshta post office, the following tariffs apply:
                        </p>
                        <ul className="delivery-to-user-list">
                            <li>order value up to <span>500 UAH</span> - the tariff is valid
                            </li>
                            <li>order value from <span>500 UAH</span> – tariff 0 UAH.
                            </li>
                        </ul>
                        <p className="delivery-to-user-text">For one product from the categories of medium or small
                            household appliances, costing up to 10,000 UAH. and weighing up to 20 kg</p>
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
                            household appliances, costing up to 10,000 UAH. and weighing up to 20 kg</p>
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
                    ref={(el) => {
                        refHeight.current[1] = el ? el.scrollHeight : 0
                    }}
                >
                    <div className="content" aria-hidden={activeQuestion === 1 ? "true" : "false"}>
                        <p className="delivery-to-user-text"><span>Browse Products:</span> Start by browsing the
                            products available
                            in the store. You can navigate through different categories or use the search feature to
                            find specific items.</p>
                        <p className="delivery-to-user-text"><span>Select Product:</span> Once you find the product you
                            want to purchase, click on it to view more details. Make sure to check the product
                            description,
                            images, and specifications to ensure it meets your requirements.</p>
                        <p className="delivery-to-user-text"><span>Add to Cart:</span> Add to Cart: If you decide to buy
                            the product, click on the "Add to Cart" button. You can continue shopping and add more items
                            to your cart if needed.
                        </p>
                        <p className="delivery-to-user-text"><span>Review Cart:</span> After adding all desired items to
                            your cart, review your cart to make sure everything is correct. You can adjust quantities or
                            remove items if necessary.</p>
                        <p className="delivery-to-user-text"><span>Complete Payment:</span> Follow the prompts to
                            complete the payment for your order. You may need to
                            enter your payment details, such as credit card information or use an online payment service
                        </p>
                        <p className="delivery-to-user-text"><span>Place Order: </span>Once your payment is processed
                            successfully,
                            review your order one last time and then click on the "Place Order" or "Complete Purchase"
                            button to finalize your purchase.</p>
                        <p className="delivery-to-user-text"><span>Track Order (Optional):</span> If the store provides
                            order tracking, you can use the order number from your confirmation email to track the
                            status of
                            your shipment and see estimated delivery times.</p>
                    </div>
                </div>
            </div>
            <div className="delivery-to-user">
                <button
                    className="delivery-to-user-btn-visible"
                    onClick={() => toggleQuestion(2)}
                >
                    <span>How much does shipping cost?</span>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 18.75L16.375 12L9.625 5.25" stroke="#333333" strokeWidth="0.872238"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div
                    className={activeQuestion === 2 ? "delivery-to-user-btn-toggle animated" : "delivery-to-user-btn-toggle"}
                    style={{height: activeQuestion === 2 ? `${refHeight.current[2]}` : "0px"}}
                    ref={(el) => {
                        refHeight.current[2] = el ? el.scrollHeight : 0
                    }}
                >
                    <div className="content" aria-hidden={activeQuestion === 2 ? "true" : "false"}>
                        <p className="delivery-to-user-text">The shipping cost can vary depending on several factors
                            such as the shipping destination,
                            the weight and dimensions of the package, the shipping method chosen (standard, expedited,
                            etc.), and any additional services requested (insurance, tracking, etc.).</p>

                        <p className="delivery-to-user-text">To get an accurate estimate of shipping costs, it's best to
                            check with the specific shipping
                            carrier or service provider you plan to use.</p>
                        <p className="delivery-to-user-text">Many companies offer online calculators where
                            you can input the relevant details to determine the shipping cost for your package.</p>
                        <p className="delivery-to-user-text">
                            Additionally, some e-commerce platforms may provide shipping cost estimations
                            during the
                            checkout process based on the items in your cart and your shipping address.</p>
                    </div>
                </div>
            </div>
            <div className="delivery-to-user">
                <button
                    className="delivery-to-user-btn-visible"
                    onClick={() => toggleQuestion(3)}
                >
                    <span>How can I pay for the goods?</span>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 18.75L16.375 12L9.625 5.25" stroke="#333333" strokeWidth="0.872238"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div
                    className={activeQuestion === 3 ? "delivery-to-user-btn-toggle animated" : "delivery-to-user-btn-toggle"}
                    style={{height: activeQuestion === 3 ? `${refHeight.current[3]}` : "0px"}}
                    ref={(el) => {
                        refHeight.current[3] = el ? el.scrollHeight : 0
                    }}
                >
                    <div className="content" aria-hidden={activeQuestion === 3 ? "true" : "false"}>
                        <p className="delivery-to-user-text">You can typically pay for goods through various payment
                            methods, depending on the options provided by the seller or the e-commerce platform you're
                            using. Here are some common payment methods:
                        </p>
                        <p className="delivery-to-user-text"><span>Credit or Debit Card:</span> You can pay using your credit or
                            debit card, either directly on the website or through a secure payment gateway.</p>
                        <p className="delivery-to-user-text"><span>Digital Wallets:</span> Digital wallet services like PayPal, Apple
                            Pay, Google Pay, and others allow you to store payment information securely and make
                            purchases online with ease.</p>
                        <p className="delivery-to-user-text"><span>Bank Transfer:</span> Some sellers may offer bank transfer as a
                            payment option. This involves transferring funds directly from your bank account to the
                            seller's account.</p>
                        <p className="delivery-to-user-text">Before making a purchase, it's essential to review the
                            available payment methods on the website or check with the seller to ensure that your
                            preferred payment method is accepted. Additionally, consider the security measures in place
                            to protect your payment information during the transaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarrantyDelivery;