import React from 'react';
import "./UserSidebar.scss";
import {Link} from "react-router-dom";

const UserSidebar = ({activepage}) => {
    return (
        <div className="usersidebar">
            {
                activepage === 'myorders' ?
                    <div className="s2">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.6667 5.3335H9.33341C7.86066 5.3335 6.66675 6.5274 6.66675 8.00016V25.3335C6.66675 26.8063 7.86066 28.0002 9.33341 28.0002H22.6667C24.1395 28.0002 25.3334 26.8063 25.3334 25.3335V8.00016C25.3334 6.5274 24.1395 5.3335 22.6667 5.3335Z"
                                stroke="#A3ADFF"/>
                            <path d="M12 12H20" stroke="#A3ADFF" strokeLinecap="round"/>
                            <path d="M12 17.3335H20" stroke="#A3ADFF" strokeLinecap="round"/>
                            <path d="M12 22.6665H17.3333" stroke="#A3ADFF" strokeLinecap="round"/>
                        </svg>
                        <span>My orders</span>
                    </div>
                    :
                    <Link to="/user/myorders"
                          className="stylenone"
                    >
                    <div className="s1">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.6667 5.3335H9.33341C7.86066 5.3335 6.66675 6.5274 6.66675 8.00016V25.3335C6.66675 26.8063 7.86066 28.0002 9.33341 28.0002H22.6667C24.1395 28.0002 25.3334 26.8063 25.3334 25.3335V8.00016C25.3334 6.5274 24.1395 5.3335 22.6667 5.3335Z"
                                stroke="#A3ADFF"/>
                            <path d="M12 12H20" stroke="#A3ADFF" strokeLinecap="round"/>
                            <path d="M12 17.3335H20" stroke="#A3ADFF" strokeLinecap="round"/>
                            <path d="M12 22.6665H17.3333" stroke="#A3ADFF" strokeLinecap="round"/>
                        </svg>
                        <span>My orders</span>
                    </div>
                    </Link>
            }

            {
                activepage === 'accountsettigs' ?
                    <div className="s2">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.9996 14.6667C18.9451 14.6667 21.3329 12.2789 21.3329 9.33333C21.3329 6.38781 18.9451 4 15.9996 4C13.0541 4 10.6663 6.38781 10.6663 9.33333C10.6663 12.2789 13.0541 14.6667 15.9996 14.6667Z"
                                stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M5.33301 28V22.6667C5.33301 21.1939 6.52691 20 7.99967 20H23.9997C25.4725 20 26.6663 21.1939 26.6663 22.6667V28"
                                stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>My details</span>
                    </div>
                    :
                    <Link to="/user/accountsettings"
                    className="stylenone"
                    >
                    <div className="s1">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.9996 14.6667C18.9451 14.6667 21.3329 12.2789 21.3329 9.33333C21.3329 6.38781 18.9451 4 15.9996 4C13.0541 4 10.6663 6.38781 10.6663 9.33333C10.6663 12.2789 13.0541 14.6667 15.9996 14.6667Z"
                                stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M5.33301 28V22.6667C5.33301 21.1939 6.52691 20 7.99967 20H23.9997C25.4725 20 26.6663 21.1939 26.6663 22.6667V28"
                                stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>My details</span>
                    </div>
                    </Link>
            }

            {
                activepage === 'myview' ?
                    <div className="s2">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_520_4473)">
                                <path d="M16 10.6929V16.0394L18.6667 18.7126" stroke="#A3ADFF"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M4.06665 14.7027C4.36544 11.7622 5.73367 9.03485 7.91029 7.04108C10.0869 5.04731 12.9196 3.92663 15.8678 3.89288C18.8161 3.85912 21.6735 4.91464 23.895 6.85805C26.1165 8.80147 27.5465 11.4967 27.9122 14.4296C28.2779 17.3625 27.5537 20.3277 25.8778 22.7595C24.2019 25.1913 21.6915 26.9195 18.8257 27.6143C15.9599 28.3091 12.9392 27.9219 10.34 26.5265C7.74076 25.1312 5.74494 22.8255 4.73332 20.0492M4.06665 26.7323V20.0492H10.7333"
                                    stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_520_4473">
                                    <rect width="32" height="32.079" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Products viewed</span>
                    </div>
                    :
                    <Link to="/user/myview"
                          className="stylenone"
                    >
                        <div className="s1">
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_520_4473)">
                                    <path d="M16 10.6929V16.0394L18.6667 18.7126" stroke="#A3ADFF"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M4.06665 14.7027C4.36544 11.7622 5.73367 9.03485 7.91029 7.04108C10.0869 5.04731 12.9196 3.92663 15.8678 3.89288C18.8161 3.85912 21.6735 4.91464 23.895 6.85805C26.1165 8.80147 27.5465 11.4967 27.9122 14.4296C28.2779 17.3625 27.5537 20.3277 25.8778 22.7595C24.2019 25.1913 21.6915 26.9195 18.8257 27.6143C15.9599 28.3091 12.9392 27.9219 10.34 26.5265C7.74076 25.1312 5.74494 22.8255 4.73332 20.0492M4.06665 26.7323V20.0492H10.7333"
                                        stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_520_4473">
                                    <rect width="32" height="32.079" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Products viewed</span>
                        </div>
                    </Link>
            }

            {
                activepage === 'mydelivery' ?
                    <div className="s2">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.9999 10L15.9999 4L10.6666 6.66667M27.9999 10V22L16.6666 28M27.9999 10L22.3333 12.6667M5.33325 9.33333L16.6666 15.3333M5.33325 9.33333V22L16.6666 28M5.33325 9.33333L10.6666 6.66667M16.6666 15.3333V28M16.6666 15.3333L22.3333 12.6667M10.6666 6.66667L22.3333 12.6667M22.3333 12.6667V17.3333"
                                stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Warranty and delivery</span>
                    </div>
                    :
                    <Link to="/user/mydelivery"
                          className="stylenone"
                    >
                        <div className="s1">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M27.9999 10L15.9999 4L10.6666 6.66667M27.9999 10V22L16.6666 28M27.9999 10L22.3333 12.6667M5.33325 9.33333L16.6666 15.3333M5.33325 9.33333V22L16.6666 28M5.33325 9.33333L10.6666 6.66667M16.6666 15.3333V28M16.6666 15.3333L22.3333 12.6667M10.6666 6.66667L22.3333 12.6667M22.3333 12.6667V17.3333"
                                    stroke="#A3ADFF" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Warranty and delivery</span>
                        </div>
                    </Link>
            }

        </div>
    );
};

export default UserSidebar;