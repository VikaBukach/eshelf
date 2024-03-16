import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../../assets/images/Logo.svg";
import { ReactComponent as BalanceIcon } from "../../../../assets/images/Balance.svg";
import { ReactComponent as HeartIcon } from "../../../../assets/images/Heart.svg";
import { ReactComponent as CartIcon } from "../../../../assets/images/Cart.svg";
import { ReactComponent as UserIcon } from "../../../../assets/images/Profile page.svg";
import { ReactComponent as CloseIcon } from "../../../../assets/images/times-solid.svg";
import { ReactComponent as MobileIcon } from "../../../../assets/images/burger-menu/mobile-phone.svg";
import { ReactComponent as LaptopIcon } from "../../../../assets/images/burger-menu/LapTop.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/images/burger-menu/Arrow.svg";

import { useModal } from "../../../hooks/useModal";
import Cart from "../../Cart";

const BurgerMenuDesktop = ({ isOpen, onClose, history }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const [showSmartphones, setShowSmartphones] = useState(false);
  const [showLaptops, setShowLaptops] = useState(false);

  const { open } = useModal();

  const handleCloseMenu = () => {
    setMenuOpen(false);
    onClose();
  };

  const handleNavLinkClick = () => {
    handleCloseMenu();
    history.push("/");
  };

  const handleSmartphonesMouseEnter = () => {
    setShowSmartphones(true);
    setShowLaptops(false);
  };

  const handleLaptopsMouseEnter = () => {
    setShowLaptops(true);
    setShowSmartphones(false);
  };

  const handleCategoryMouseLeave = () => {
    setShowSmartphones(false);
    setShowLaptops(false);
  };

  return (
    <div className="burger-menu_container">
      <div className="burger-menu">
               <div className="burger-menu__categories">
          <nav>
            <h2>Catalog (desktop)</h2>
            <ul>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <MobileIcon className="category-image" />
                  <NavLink to="/smartphones" onClick={handleNavLinkClick}>
                    Smartphones
                  </NavLink>
                </div>
                {showSmartphones && (
                  <ul className="subcategory-menu_desktop">
                    <div>Smartphones</div>
                  </ul>
                )}
                <ArrowIcon onMouseEnter={handleSmartphonesMouseEnter} onMouseLeave={handleCategoryMouseLeave} />
              </li>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <LaptopIcon className="category-image" />
                  <NavLink to="/laptops" onClick={handleNavLinkClick}>
                    Laptops
                  </NavLink>
                </div>
                {showLaptops && (
                  <ul className="subcategory-menu_desktop">
                    <div>Laptops</div>
                  </ul>
                )}
                <ArrowIcon onMouseEnter={handleLaptopsMouseEnter} onMouseLeave={handleCategoryMouseLeave} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuDesktop;
