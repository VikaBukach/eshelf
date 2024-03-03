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

const BurgerMenu = ({ isOpen, onClose, history }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const [activeCategory, setActiveCategory] = useState(null);
  const [smartphonesActive, setSmartphonesActive] = useState(false);
  const [laptopsActive, setLaptopsActive] = useState(false);

  const { open } = useModal();

  const handleCloseMenu = () => {
    setMenuOpen(false);
    onClose();
  };

  const handleNavLinkClick = () => {
    handleCloseMenu();
    history.push("/");
  };

  const toggleMobileCategories = (category) => {
    if (activeCategory !== category) {
      setActiveCategory(category);
      setSmartphonesActive(category === "smartphones");
      setLaptopsActive(category === "laptops");
    } else {
      setActiveCategory(null);
      setSmartphonesActive(false);
      setLaptopsActive(false);
    }
  };

  return (
    <div className="burger-menu_container">
      <div className="burger-menu">
        <div className="burger-menu_header">
          <NavLink to="/" className="burger-menu__logo" onClick={handleNavLinkClick}>
            <LogoIcon />
          </NavLink>
          <button className="burger-menu__button" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
        </div>
        <div className="burger-menu_links">
          <NavLink to="/users" className="burger-menu__link-users" onClick={handleNavLinkClick}>
            <UserIcon />
          </NavLink>
          <div className="burger-menu__link-cart">
            <Cart
              activator={
                <div onClick={open}>
                  <CartIcon />
                </div>
              }
            />
          </div>
          <NavLink to="/comparing" className="burger-menu__link-comparing" onClick={handleNavLinkClick}>
            <BalanceIcon />
          </NavLink>
          <NavLink to="/favorites" className="burger-menu__link-favorites" onClick={handleNavLinkClick}>
            <HeartIcon />
          </NavLink>
        </div>
        <div className="burger-menu__categories">
          <nav>
            <h2>Catalog (mobile)</h2>
            <ul>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <MobileIcon className={`category-image ${activeCategory === "smartphones" && smartphonesActive ? "active" : "not-active"}`} />
                  <NavLink to="/smartphones" onClick={handleNavLinkClick}>
                    Smartphones
                  </NavLink>
                </div>
                {smartphonesActive && (
                  <ul className="subcategory-menu">
                    <div>Smartphones subcategory</div>
                  </ul>
                )}
                <ArrowIcon onClick={() => toggleMobileCategories("smartphones")} />
              </li>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <LaptopIcon className={`category-image ${activeCategory === "laptops" && laptopsActive ? "active" : "not-active"}`} />
                  <NavLink to="/laptops" onClick={handleNavLinkClick}>
                    Laptops
                  </NavLink>
                </div>
                {laptopsActive && (
                  <ul className="subcategory-menu">
                    <div>Laptops subcategory</div>
                  </ul>
                )}
                <ArrowIcon onClick={() => toggleMobileCategories("laptops")} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
