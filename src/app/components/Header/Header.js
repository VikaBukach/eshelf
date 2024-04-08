import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, setCartTotal } from "../../store/slices/navMenuSlice";
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
  const selectCartTotal = (state) => state.menu.cartTotal;
  const cartTotal = useSelector(selectCartTotal);
  const favoritesTotal = useSelector((state) => state.favorites.data).length;
  const compareTotal = useSelector((state) => state.compare.data).length;
  const cartTotalNumber = useSelector((state) => state.cart.data).length;

  const windowWidth = useWindowWidth();
  // Скидувало cartTotal
  // useEffect(() => {
  //   const calculateCartTotal = () => {
  //     const total = 0;
  //     dispatch(setCartTotal(total));
  //   };

  //   calculateCartTotal();
  // }, [dispatch]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const { open } = useModal();
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = 'en-US'; 
    recognition.start(); 
  
    recognition.onresult = function(event) { 
      const searchText = event.results[0][0].transcript; 
      document.querySelector('.header__search-input').value = searchText;
    };
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content-container">
            <div className="header__burger-logo-wrap">
              <BurgerMenuIcon className="burger-icon" onClick={handleToggleMenu} />
              <NavLink to="/" className="header__logo">
                <LogoIcon />
              </NavLink>
            </div>
            <div className="header__search-container">
              <input type="text" className="header__search-input" placeholder="Search..." />
              <div className="microphone-icon-wrap">
                <MicrophoneIcon className="microphone-icon" onClick={handleVoiceSearch} />
              </div>
              <div className="search-icon-wrap">
                <SearchIcon className="search-icon" />
              </div>
            </div>
            {/* <NavLink to="/" className="header__link-home"></NavLink> */}
            <div className="header__icons-wrap">
              <NavLink to="/comparing" className="header__link-comparing">
                <BalanceIcon />
                {compareTotal > 0 && <span className="counter-circle">{compareTotal}</span>}
              </NavLink>
              <NavLink to="/favorites" className="header__link-favorites">
                <HeartIcon />
                {favoritesTotal > 0 && <span className="counter-circle">{favoritesTotal}</span>}
              </NavLink>
              <div className="header__link-cart">
                <Cart
                  activator={
                    <div className="cart-activator" onClick={open}>
                      <CartIcon />
                      <span className={`header__link-cart-name ${cartTotalNumber > 0 ? "header__link-cart-name-active" : ""}`}>Basket</span>
                      {windowWidth > 1024 && cartTotal > 0 && <span className="counter">${cartTotal}</span>}
                      {windowWidth <= 1024 && cartTotal > 0 && (
                        <span className="counter-circle">{cartTotalNumber}</span>
                      )}
                    </div>
                  }
                />
              </div>
            </div>

            {user ? (
              <NavLink to="/user/myorders" className="header__link-users">
                <UserIcon />
                <p>
                  Hello, <span>{user.name}</span>
                </p>
              </NavLink>
            ) : (
              <div className="header__link-users">
                <Auth
                  activator={
                    <div className="header__link-users-icon">
                      <UserIcon />
                    </div>
                  }
                />
              </div>
            )}
            {/* <NavLink to="/users" className="header__link-users">
            <UserIcon />
            {windowWidth > 1024 && <span>Hello, user</span>}
            {windowWidth <= 1024 && userCount > 0 && <span className="counter-circle"></span>}
          </NavLink> */}

            {menuOpen && (
              <>
                {windowWidth < 1024 && <BurgerMenu isOpen={menuOpen} onClose={handleToggleMenu} />}
                {windowWidth > 1024 && <BurgerMenuDesktop isOpen={menuOpen} onClose={handleToggleMenu} />}
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
