import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/NavMenuSlice";
import { ReactComponent as BurgerMenuIcon } from "../../../assets/images/Burger.svg";
import { ReactComponent as MicrophoneIcon } from "../../../assets/images/Microphone.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/Search.svg";
import { ReactComponent as BalanceIcon } from "../../../assets/images/Balance.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/Heart.svg";
import { ReactComponent as CartIcon } from "../../../assets/images/Cart.svg";
import { ReactComponent as UserIcon } from "../../../assets/images/Profile page.svg";

import useWindowWidth from "../../hooks/useWindowWidth";
import { useModal } from "../../hooks/useModal";
import Cart from "../Cart";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.isOpen);
  const windowWidth = useWindowWidth();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const shouldShowMobileMenu = windowWidth <= 768;

  const { open } = useModal();

  return (
    <>
      <header className="header">
        <div className={`header__content-container ${shouldShowMobileMenu && mobileMenuOpen ? "mobile" : ""}`}>
          {shouldShowMobileMenu ? (
            <>
              <BurgerMenuIcon
                className={`burger-icon ${menuOpen || (shouldShowMobileMenu && mobileMenuOpen) ? "mobile" : ""}`}
                onClick={handleMobileMenuToggle}
              />
              {mobileMenuOpen && (
                <>
                  <button className="header__menu-mobile_close-button" onClick={handleMobileMenuToggle}>
                    &times;
                  </button>

                  <nav className="header__menu-mobile" onClick={handleMobileMenuToggle}>
                    <span>Catalog (mobile)</span>
                    <ul>
                      <li>
                        <NavLink to="/smartphones">Smartphones</NavLink>
                      </li>
                      <li>
                        <NavLink to="/laptops">Laptops</NavLink>
                      </li>
                    </ul>
                  </nav>
                </>
              )}
            </>
          ) : (
            <BurgerMenuIcon
              className={`burger-icon ${menuOpen || (shouldShowMobileMenu && mobileMenuOpen) ? "mobile" : ""}`}
              onClick={handleToggleMenu}
            />
          )}

          <nav className={`header__menu ${menuOpen || (shouldShowMobileMenu && mobileMenuOpen) ? "open" : ""}`}>
            <span>Catalog</span>
            <ul>
              <li>
                <NavLink to="/smartphones">Smartphones</NavLink>
              </li>
              <li>
                <NavLink to="/laptops">Laptops</NavLink>
              </li>
            </ul>
          </nav>

          <span className={`header__logo ${menuOpen || (shouldShowMobileMenu && mobileMenuOpen) ? "mobile" : ""}`}>
            eShelf
          </span>

          <div
            className={`header__search-container ${menuOpen || (shouldShowMobileMenu && mobileMenuOpen) ? "mobile" : ""}`}
          >
            <input type="text" className="header__search-input" placeholder="Search..." />
            <MicrophoneIcon className="microphone-icon" />
            <SearchIcon className="search-icon" />
          </div>
          <NavLink to="/" className="header__link-home"></NavLink>
          <NavLink to="/comparing" className="header__link-comparing">
            <BalanceIcon />
          </NavLink>
          <NavLink to="/favorites" className="header__link-favorites">
            <HeartIcon />
          </NavLink>
          <NavLink to="/cart" className="header__link-cart">
          <Cart
            activator={
              <div onClick={open}>
                <CartIcon />
              </div>
            }
          ></Cart>
          </NavLink>
          <NavLink to="/users" className="header__link-users">
            <UserIcon />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export { Header };
