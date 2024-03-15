import "./Delivery.scss";
import React, {useState, useEffect, useRef} from 'react';


const WarrantyDelivery = () => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef(null);

    useEffect(() => {
        if (refHeight.current) {
            setHeightEl(`${refHeight.current.scrollHeight}px`)
        }
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="delivery-to-user-content">
            <div className="delivery-to-user">
                <button
                    className="delivery-to-user-btn-visible"
                    onClick={toggleState}
                >
                    <span>How to place an order?</span>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 18.75L16.375 12L9.625 5.25" stroke="#333333" strokeWidth="0.872238"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div
                    className={toggle ? "delivery-to-user-btn-toggle animated" : "delivery-to-user-btn-toggle"}
                    style={{height: toggle ? `${heightEl}` : "0px"}}
                    ref={refHeight}
                >
                    <div aria-hidden={toggle ? "true" : "false"}>
                        <p className="delivery-to-user-text">You can place an order on the site allo.ua around the clock.
                            <p>We will not disturb you and make phone calls if you do not wish to contact us.</p>
                            <p>In the near future you will receive a notification with information on the order, or our
                                partner will contact you shortly to clarify the data on the order.</p>
                        </p>
                        <p className="delivery-to-user-text">For any questions, you can always contact us by phone 0 (800) 300-100 (free of charge) or
                            write to us in the chat, we will answer you very soon.</p>
                        <div className="delivery-to-user-posts">
                            <img src="/img/icons_profile/Nova_Poshta_202ч2_logo 1.svg" alt="img" />
                            <h6>Nova Poshta</h6>
                        </div>
                        <p className="delivery-to-user-text">In the period from 11/17/22 to 01/31/23, when delivering goods to the Nova Poshta post
                            office, the
                            following tariffs apply:
                        </p>
                        <ul className="delivery-to-user-list">
                            <li>order value up to <span>500 UAH</span> - the tariff is valid
                            </li>
                            <li>order value from <span>500 UAH</span> – tariff 0 UAH.
                            </li>
                        </ul>
                        <p className="delivery-to-user-text">For one product from the categories of medium or small household appliances, costing up to
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
                        <p className="delivery-to-user-text">For one product from the categories of medium or small household appliances, costing up to
                            10,000
                            UAH. and weighing up to 20 kg</p>
                    </div>

                </div>


            </div>


            {/*<div className="delivery-to-user">*/}
            {/*    <button*/}
            {/*        onClick={toggleState}*/}
            {/*        className="delivery-to-user-btn-visible">*/}
            {/*        <span>How to place an order?</span>*/}
            {/*        <svg*/}
            {/*            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M9.625 18.75L16.375 12L9.625 5.25" stroke="#333333" strokeWidth="0.872238"*/}
            {/*                  strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*    <div*/}
            {/*        className={toggle ? "delivery-to-user-btn-toggle animated" : "delivery-to-user-btn-toggle"}*/}
            {/*        style={{height: toggle ? `${heightEl}` : "0px"}}*/}
            {/*        ref={refHeight}*/}
            {/*    >*/}
            {/*        <div aria-hidden={toggle ? "true" : "false"}>*/}
            {/*            <p>You can place an order on the site allo.ua around the clock.*/}
            {/*            </p>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default WarrantyDelivery;