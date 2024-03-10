import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/NavMenuSlice";
import { ReactComponent as BurgerMenuIcon } from "../../../assets/images/Burger.svg";
import { ReactComponent as LogoIcon } from "../../../assets/images/Logo.svg";
import { ReactComponent as MicrophoneIcon } from "../../../assets/images/Microphone.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/Search.svg";
import { ReactComponent as BalanceIcon } from "../../../assets/images/Balance.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/Heart.svg";
import { ReactComponent as CartIcon } from "../../../assets/images/Cart.svg";
import { ReactComponent as UserIcon } from "../../../assets/images/Profile page.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import BurgerMenuDesktop from "./BurgerMenu/BurgerMenuDesktop";

import useWindowWidth from "../../hooks/useWindowWidth";
import { useModal } from "../../hooks/useModal";
import Cart from "../Cart";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.isOpen);
  const windowWidth = useWindowWidth();
  const [compareCount, setCompareCount] = useState(1);
  const [favoritesCount, setFavoritesCount] = useState(1);
  const [cartCount, setCartCount] = useState(1);
  const [userCount, setUserCount] = useState(1);


  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const { open } = useModal();
  const handleVoiceSearch = () => {
    // Функція обробки голосового повідомлення
  };

  return (
    <>
      <header className="header">
        <div className="header__content-container">
          <BurgerMenuIcon className="burger-icon" onClick={handleToggleMenu} />
          <NavLink to="/" className="header__logo">
            <LogoIcon />
          </NavLink>
          <div className="header__search-container">
            <input type="text" className="header__search-input" placeholder="Search..." />
            <MicrophoneIcon className="microphone-icon" onClick={handleVoiceSearch} />
            <SearchIcon className="search-icon" />
          </div>
          <NavLink to="/" className="header__link-home"></NavLink>
          <NavLink to="/comparing" className="header__link-comparing">
            <BalanceIcon />
            {compareCount > 0 && <span className="counter-circle">{compareCount}</span>}
          </NavLink>
          <NavLink to="/favorites" className="header__link-favorites">
            <HeartIcon />
            {favoritesCount > 0 && <span className="counter-circle">{favoritesCount}</span>}
          </NavLink>
          <div className="header__link-cart">
            <Cart
              activator={
                <div className = "cart-activator" onClick={open}>
                  <CartIcon />
                  {windowWidth > 1024 && cartCount > 0 && (
               <span className="counter">${cartCount}</span>
            )}
            {windowWidth <= 1024 && userCount > 0 && (
              <span className="counter-circle">{cartCount}</span>
            )}
                </div>
              }

            />

          </div>

          <NavLink to="/users" className="header__link-users">
            <UserIcon />
            {windowWidth > 1024 && (
              <span>Hello, user</span>
            )}
            {windowWidth <= 1024 && userCount > 0 && (
              <span className="counter-circle"></span>
            )}
          </NavLink>

          {menuOpen && (
            <>
              {windowWidth < 1024 && <BurgerMenu isOpen={menuOpen} onClose={handleToggleMenu} />}
              {windowWidth > 1024 && <BurgerMenuDesktop isOpen={menuOpen} onClose={handleToggleMenu} />}
            </>
          )}
        </div>
      </header>
    </>
  );
};

export { Header };
