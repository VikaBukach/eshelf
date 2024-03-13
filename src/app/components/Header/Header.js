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
import Auth from "../Auth/Auth";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.isOpen);
  const user = useSelector((state) => state.user.data);
  const windowWidth = useWindowWidth();

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
          </NavLink>
          <NavLink to="/favorites" className="header__link-favorites">
            <HeartIcon />
          </NavLink>
          <div className="header__link-cart">
            <Cart
              activator={
                <div onClick={open}>
                  <CartIcon />
                </div>
              }
            />
          </div>

          {user ? (
            <NavLink to="/users" className="header__link-users">
              <span>Hello, {user.name}</span>
              <UserIcon />
            </NavLink>
          ) : (
            <div className="header__link-users">
              <Auth
                activator={
                  <div>
                    <UserIcon />
                  </div>
                }
              />
            </div>
          )}

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
