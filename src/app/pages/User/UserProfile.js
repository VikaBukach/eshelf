import React from 'react';
import {useParams} from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar/UserSidebar";
import AccountSettings from "../../components/UserProfile/AccountSettings/AccountSettings";
import "./UserProfile.scss";

const UserProfile = () => {
    const {activepage} = useParams();

    // alert(activepage)

    return (
        <div className="userprofile_container container">
            {/*<h1>Userprofile, showing {activepage}</h1>*/}
            <div className="userprofile">
                <div className="userprofile-sidebar-left">
                    <UserSidebar activepage={activepage}/>
                </div>
                <div className="userprofile-sidebar-right">
                    {activepage === 'accountsettings' && <AccountSettings/>}
                </div>

            </div>

        </div>
    );
};

export default UserProfile;