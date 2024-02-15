import React from 'react';
import './Top_Brands.scss'

function TopBrands(props) {
    return (
        <div className="section_top-brands">
            <h6 className="section_top-brands-title">
                Top Brands
            </h6>
            <div className="section_top-brands-items">
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/apple.svg" alt="apple"/>
                </div>
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/acer.svg" alt="acer"/>
                </div>
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/mi-xiaomi.svg" alt="mi-xiaomi"/>
                </div>
                <div className="section_top-brands-logo" >
                    <img className="section_top-brands-logo-img" src="/img/samsung.svg" alt="samsung"/>
                </div>
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/lenovo.svg" alt="lenovo"/>
                </div>
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/huawey.svg" alt="huawei"/>
                </div>
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/jbl.svg" alt="jbl"/>
                </div>
                <div className="section_top-brands-logo">
                    <img className="section_top-brands-logo-img" src="/img/hp.svg" alt="hp"/>
                </div>
            </div>
        </div>
    );
}

export default TopBrands;