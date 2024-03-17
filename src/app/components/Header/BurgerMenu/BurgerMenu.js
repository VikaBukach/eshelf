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
import { ReactComponent as ArrowIconBack } from "../../../../assets/images/burger-menu/ArrowBack.svg";

import { useModal } from "../../../hooks/useModal";
import Cart from "../../Cart";

const BurgerMenu = ({ isOpen, onClose, history }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [smartphonesActive, setSmartphonesActive] = useState(false);
  const [laptopsActive, setLaptopsActive] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Catalog");
  const { open } = useModal();

  const handleCloseMenu = () => {
    setBurgerMenuOpen(false);
    onClose();
  };
  const handleOpenMenu = () => {
    setBurgerMenuOpen(true);
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
      setCurrentCategory(category);
    } else {
      setActiveCategory(null);
      setSmartphonesActive(false);
      setLaptopsActive(false);
      setCurrentCategory("Catalog");
    }
  };

  const handleBackButtonClick = () => {
    setCurrentCategory("Catalog");
    setSmartphonesActive(false);
    setLaptopsActive(false);
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
          <NavLink to="/user/myorders" className="burger-menu__link-users" onClick={handleNavLinkClick}>
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

          {/* //приховуємо на моб.версії можливість додавання до порівняння товарів
          <NavLink to="/comparing" className="burger-menu__link-comparing" onClick={handleNavLinkClick}>
            <BalanceIcon />
          </NavLink> */}
          <NavLink to="/favorites" className="burger-menu__link-favorites" onClick={handleNavLinkClick}>
            <HeartIcon />
          </NavLink>
        </div>
        <div className="burger-menu__categories">
          <nav>
            <h2>{currentCategory}</h2>
            <ul>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <MobileIcon
                    className={`category-image ${activeCategory === "smartphones" && smartphonesActive ? "active" : "not-active"}`}
                  />
                  <NavLink to="/smartphones" onClick={handleNavLinkClick}>
                    Smartphones
                  </NavLink>
                </div>
                {smartphonesActive && (
                  <div className="subcategory-menu_wrapper">
                    <ul className="subcategory-menu">
                      <NavLink onClick={handleBackButtonClick}>
                        <ArrowIconBack />
                        All categories
                      </NavLink>

                      <div>Smartphones subcategory1</div>
                      <div>Smartphones subcategory2</div>
                      <div>Smartphones subcategory3</div>
                    </ul>
                  </div>
                )}
                <ArrowIcon onClick={() => toggleMobileCategories("smartphones")} />
              </li>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <LaptopIcon
                    className={`category-image ${activeCategory === "laptops" && laptopsActive ? "active" : "not-active"}`}
                  />
                  <NavLink to="/laptops" onClick={handleNavLinkClick}>
                    Laptops
                  </NavLink>
                </div>
                {laptopsActive && (
                  <ul className="subcategory-menu">
                    <NavLink onClick={handleBackButtonClick}>
                      <ArrowIconBack />
                      All categories
                    </NavLink>

                    <div>Laptops subcategory1</div>
                    <div>Laptops subcategory2</div>
                    <div>Laptops subcategory3</div>
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
