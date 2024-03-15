import React from 'react';
import "./SocialNetworks.scss";

const SocialNetworks = () => {
    return (
        <div className="social-networks">
            <div className="social-networks-left">
                <h1 className="social-networks-title">Phone consultations and orders</h1>
                <p>We are always happy to respond to your request in a timely manner and develop effective cooperation
                    on all issues related to the provision of relevant materials, official comments from speakers and
                    company experts, and other publications in the media.</p>
                <h1 className="social-networks-title">We are in social networks</h1>
                <div className="social-networks-icons">
                    <div>
                        <img src="/img/icons_profile/Fb.svg" alt="icon"/>
                        <span>Facebook</span>
                    </div>
                    <div>
                        <img src="/img/icons_profile/viber.svg" alt="icon"/>
                        <span>Viber</span>
                    </div>
                    <div>
                        <img src="/img/icons_profile/youtube.svg" alt="icon"/>
                        <span>YouTube</span>
                    </div>
                    <div>
                        <img src="/img/icons_profile/telegram.svg" alt="icon"/>
                        <span>Telegram</span>
                    </div>
                </div>
                <h1 className="social-networks-title">Feedback</h1>
                <p>Email: info@foxtrot.com.ua</p>
                <p>0 800 300 000</p>
                <p>0 800 100 000</p>
                <p>Free from fixed and mobile phones in Ukraine</p>
            </div>
        </div>
    );
};

export default SocialNetworks;