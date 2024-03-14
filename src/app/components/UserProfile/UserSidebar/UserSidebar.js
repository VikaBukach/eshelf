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

        </div>
    );
};

export default UserSidebar;