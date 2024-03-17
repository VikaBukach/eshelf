import React, {useEffect, useState} from 'react';
import "./UserDetails.scss";
import {ContactDetails} from "../../OrderPage/components/ContactDetails";
import Button from "../../Main/Button/Button";
const UserDetails = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    })

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleCancelClick = () => {
        setIsEditing(false);
    }

    const handleSaveClick = () => {
        // Логіка для збереження даних
        setIsEditing(false)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {

    }, []);

    return (
        <div className="mydetails">
            <ContactDetails
                state={userData}
                setState={setUserData}
                accountSettingsClass="account-settings"
                inputContainerClass="input-settings-container"
                labelClass="label-settings"
                disabled={!isEditing}
                onChange={handleChange}
            />
            {isEditing ? (
                <div className="mydetails-btn-change">
                    <Button
                        btnClass={"mydetails-btn-cancel"}
                        svg={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.6319 14.369L10.0008 10.0002M14.3696 5.63135L10.0008 10.0002M10.0008 10.0002L5.6319 5.63135M10.0008 10.0002L14.3696 14.369"
                                stroke="#8119B1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>}
                        onClick={handleCancelClick}
                        text={"Cancel"}
                    />
                    <Button
                        btnClass={"mydetails-btn-save"}
                        svg={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 11.5L6.78571 16.25L17.5 4.375" stroke="white" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>}
                        onClick={handleSaveClick}
                        text={"Save"}
                    />
                </div>
            ) : (
                <Button
                    btnClass={"mydetails-btn-edit"}
                    svg={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.16669 3.3335H3.33335C2.89133 3.3335 2.4674 3.50909 2.15484 3.82165C1.84228 4.13421 1.66669 4.55814 1.66669 5.00016V16.6668C1.66669 17.1089 1.84228 17.5328 2.15484 17.8453C2.4674 18.1579 2.89133 18.3335 3.33335 18.3335H15C15.442 18.3335 15.866 18.1579 16.1785 17.8453C16.4911 17.5328 16.6667 17.1089 16.6667 16.6668V10.8335"
                            stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M15.4167 2.0832C15.7482 1.75168 16.1978 1.56543 16.6667 1.56543C17.1355 1.56543 17.5852 1.75168 17.9167 2.0832C18.2482 2.41472 18.4345 2.86436 18.4345 3.3332C18.4345 3.80204 18.2482 4.25168 17.9167 4.5832L10 12.4999L6.66669 13.3332L7.50002 9.99986L15.4167 2.0832Z"
                            stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                    onClick={handleEditClick}
                    text={"Edit information"}
                />
            )}
        </div>
    );
};

export default UserDetails;