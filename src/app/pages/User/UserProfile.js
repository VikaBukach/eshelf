import React from 'react';
import {useParams} from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar/UserSidebar";
import UserDetails from "../../components/UserProfile/UserDetails/UserDetails";
import "./UserProfile.scss";
import UserOrders from "../../components/UserProfile/UserOrders/UserOrders";
import UserView from "../../components/UserProfile/UserView/UserView";
import WarrantyDelivery from "../../components/UserProfile/Delivery/WarrantyDelivery";
import SocialNetworks from "../../components/UserProfile/SocialNetworks/SocialNetworks";
import { useSelector  } from "react-redux";

const UserProfile = ({ state, setState }) => {
    const {activepage} = useParams();
    const orderNumber = useSelector((state) => state.order.orderNumber);

    return (
        <div className="userprofile_container container">
            <h1 className="userprofile-title">Account settings</h1>
            {/*<h1>Userprofile, showing {activepage}</h1>*/}
            <div className="userprofile">
                <div className="userprofile-sidebar-left">
                    <UserSidebar activepage={activepage}/>
                </div>

                <div className="userprofile-sidebar-right">
                    {activepage === 'accountsettings' && <UserDetails/>}
                    {activepage === 'myorders' || !activepage && <UserOrders />}
                    {activepage === 'myview' && <UserView />}
                    {activepage === 'mydelivery' && <WarrantyDelivery />}
                    {activepage === 'socialnetworks' && <SocialNetworks />}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;