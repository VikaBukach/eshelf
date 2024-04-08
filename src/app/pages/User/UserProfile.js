import React from "react";
import { useParams } from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar/UserSidebar";
import UserDetails from "../../components/UserProfile/UserDetails/UserDetails";
import "./UserProfile.scss";
import UserOrders from "../../components/UserProfile/UserOrders/UserOrders";
import UserView from "../../components/UserProfile/UserView/UserView";
import WarrantyDelivery from "../../components/UserProfile/Delivery/WarrantyDelivery";
import SocialNetworks from "../../components/UserProfile/SocialNetworks/SocialNetworks";
import { useSelector } from "react-redux";

export const UserProfile = ({ state, setState }) => {
  let { activepage } = useParams();

  // Використання стандартного значення, якщо activepage відсутній
  activepage = activepage ?? "accountsettings";

  const orderNumber = useSelector((state) => {
    return state.order.orderNumber;
  });

  return (
    // Винесла контейнер в окремий дів
    <div className="container">
      <div className="userprofile_container ">
        <h1 className="userprofile-title">Account settings</h1>
        <div className="userprofile">
          <div className="userprofile-sidebar-left">
            <UserSidebar activepage={activepage} />
          </div>

          <div className="userprofile-sidebar-right">
            {activepage === "accountsettings" && <UserDetails />}
            {activepage === "myorders" && <UserOrders orderNumber={orderNumber} />}
            {activepage === "myview" && <UserView />}
            {activepage === "mydelivery" && <WarrantyDelivery />}
            {activepage === "socialnetworks" && <SocialNetworks />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
