import "./Delivery.scss";
import React, {useState, useEffect, useRef} from 'react';


const WarrantyDelivery = () => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef(null);

    useEffect(() => {
        if(refHeight.current){
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
                        <p>You can place an order on the site allo.ua around the clock. We will not disturb you and make phone calls if you do not wish to contact us. In the near future you will receive a notification with information on the order, or our
                            partner will
                            contact you shortly to clarify the data on the order.
                        </p>
                        <div>
                            <img src="/img/icons_profile/Nova_Poshta_202ч2_logo 1.svg" alt="img"/>
                            <h6>Nova Poshta</h6>
                        </div>
                        <p>In the period from 11/17/22 to 01/31/23, when delivering goods to the Nova Poshta post
                            office, the
                            following tariffs apply:
                        </p>
                        <ul>
                            <li>order value up to 500 UAH - the tariff is valid
                            </li>
                            <li>order value from 500 UAH – tariff 0 UAH.
                            </li>
                        </ul>
                        <p>For one product from the categories of medium or small household appliances, costing up to
                            10,000
                            UAH. and weighing up to 20 kg</p>
                        <div>
                            <img src="/img/icons_profile/1200px-Ukrposhta-ua 1.svg" alt="img"/>
                            <h6>Ukr Poshta</h6>
                        </div>
                        <ul>
                            <li>order value up to 500 UAH - the tariff is valid
                            </li>
                            <li>order value from 500 UAH – tariff 35 UAH.
                            </li>
                        </ul>
                        <p>For one product from the categories of medium or small household appliances, costing up to
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