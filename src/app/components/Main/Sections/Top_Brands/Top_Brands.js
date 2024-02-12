import React from 'react';

function TopBrands(props) {
    return (
        <div className="secrion_top-brands">
            <h6 className="secrion_top-brands-title">
                Top Brands
            </h6>
            <div className="secrion_top-brands-items">
            <img className="section_top-brands-logo" src="/img/apple.svg" alt="apple"/>
            <img className="section_top-brands-logo" src="/img/acer.svg" alt="acer"/>
            <img className="section_top-brands-logo" src="/img/mi-xiaomi.svg" alt="mi-xiaomi"/>
            <img className="section_top-brands-logo" src="/img/samsung.svg" alt="samsung"/>
            <img className="section_top-brands-logo" src="/img/lenovo.svg" alt="lenovo"/>
            <img className="section_top-brands-logo" src="/img/huawey.svg" alt="huawei"/>
            <img className="section_top-brands-logo" src="/img/jbl.svg" alt="jbl"/>
            <img className="section_top-brands-logo" src="/img/hp.svg" alt="hp"/>
            </div>


        </div>
    );
}

export default TopBrands;