import React from "react";
import "./TopBrands.scss";

function TopBrands(props) {
  return (
    <div className="section_top-brands">
      <h6 className="section_top-brands-title">Top Brands</h6>
      <div className="section_top-brands-items">
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/apple.svg" alt="apple" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/acer.svg" alt="acer" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/mi-xiaomi.svg" alt="mi-xiaomi" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/samsung.svg" alt="samsung" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/lenovo.svg" alt="lenovo" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/huawey.svg" alt="huawei" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/jbl.svg" alt="jbl" />
        </div>
        <div className="section_top-brands-logo">
          <img className="section_top-brands-logo-img" src="/img/hp.svg" alt="hp" />
        </div>
      </div>
      <div className="section_top-brands-items-tablet">
        <div className="section_top-brands-logo-tablet1">
          <img className="section_top-brands-logo-img" src="/img/logo_tablet/acer.png" alt="acer" />

          <img className="section_top-brands-logo-img" src="/img/logo_tablet/lenovo.png" alt="lenovo" />

          <img className="section_top-brands-logo-img" src="/img/logo_tablet/samsung.png" alt="samsung" />
        </div>

        <div className="section_top-brands-logo-tablet2">
          <img className="section_top-brands-logo-img" src="/img/logo_tablet/mi.png" alt="mi-xiaomi" />

          <img className="section_top-brands-logo-img" src="/img/logo_tablet/jbl.png" alt="jbl" />

          <img className="section_top-brands-logo-img" src="/img/logo_tablet/huawei.png" alt="huawei" />

          <img className="section_top-brands-logo-img" src="/img/logo_tablet/hp.png" alt="hp" />

          <img className="section_top-brands-logo-img" src="/img/logo_tablet/apple.png" alt="apple" />
        </div>
      </div>
    </div>
  );
}

export default TopBrands;
