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
import { ReactComponent as TvIcon } from "../../../../assets/images/burger-menu/Tv.svg";
import { ReactComponent as PcIcon } from "../../../../assets/images/burger-menu/Pc.svg";

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
  const [tvActive, setTvActive] = useState(false);
  const [pcActive, setPcActive] = useState(false);


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
      setSmartphonesActive(category === "smartphones");
      setLaptopsActive(category === "laptops");
      setTvActive(category === "tv");
      setPcActive(category === "pc");


    } else {
      setActiveCategory(null);
      setSmartphonesActive(false);
      setLaptopsActive(false);
      setTvActive(false);
      setPcActive(false);


    }
  };

  const handleBackButtonClick = () => {
    setSmartphonesActive(false);
    setLaptopsActive(false);
    setTvActive(false);
    setPcActive(false);

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
            <h2>Catalog</h2>
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
                  <ul className="subcategory-menu">
                    <h2>Smartphones</h2>
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
                    <h2>Laptops</h2>
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
              <li className="category-link">
                <div className="category-link-wrapper">
                  <TvIcon
                    className={`category-image ${activeCategory === "tv" && tvActive ? "active" : "not-active"}`}
                  />
                  <NavLink to="/tv" onClick={handleNavLinkClick}>
                    Televisons
                  </NavLink>
                </div>
                {tvActive && (
                  <ul className="subcategory-menu">
                    <h2>Televisons</h2>
                    <NavLink onClick={handleBackButtonClick}>
                      <ArrowIconBack />
                      All categories
                    </NavLink>

                    <div>Televisons subcategory1</div>
                    <div>Televisons subcategory2</div>
                    <div>Televisons subcategory3</div>
                  </ul>
                )}
                <ArrowIcon onClick={() => toggleMobileCategories("tv")} />
              </li>
              <li className="category-link">
                <div className="category-link-wrapper">
                  <PcIcon
                    className={`category-image ${activeCategory === "pc" && pcActive ? "active" : "not-active"}`}
                  />
                  <NavLink to="/pc" onClick={handleNavLinkClick}>
                    PC and components
                  </NavLink>
                </div>
                {pcActive && (
                  <ul className="subcategory-menu">
                    <h2>PC and components</h2>
                    <NavLink onClick={handleBackButtonClick}>
                      <ArrowIconBack />
                      All categories
                    </NavLink>

                    <div>PC and components subcategory1</div>
                    <div>PC and components subcategory2</div>
                    <div>PC and components subcategory3</div>
                  </ul>
                )}
                <ArrowIcon onClick={() => toggleMobileCategories("pc")} />
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
