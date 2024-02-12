import React from "react";
import { NavLink } from "react-router-dom";
//import { PiScales } from "react-icons/pi";
//import { FaRegHeart, FaOpencart } from "react-icons/fa6";
//import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/NavMenuSlice";
import { ReactComponent as BurgerMenuIcon } from "../../../assets/images/Burger.svg";
import { ReactComponent as MicrophoneIcon } from "../../../assets/images/Microphone.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/Search.svg";
import { ReactComponent as BalanceIcon } from "../../../assets/images/Balance.svg";
import { ReactComponent as HeartIcon } from "../../../assets/images/Heart.svg";
import { ReactComponent as CartIcon } from "../../../assets/images/Cart.svg";
import { ReactComponent as UserIcon } from "../../../assets/images/Profile page.svg";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <header className="header">
        <div className="header__content-container">
          <BurgerMenuIcon className="burger-icon" onClick={handleToggleMenu} />

          <nav className={`header__menu ${menuOpen ? "open" : ""}`}>
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

          <span className="header__logo">eShelf</span>

          <div className="header__search-container">
            <input type="text" className="header__search-input" placeholder="Search..." />
            <MicrophoneIcon className="microphone-icon" />
            <SearchIcon className="search-icon" />
          </div>
          <NavLink to="/"></NavLink>
          <NavLink to="/comparing" className="header__link-comparing">
            <BalanceIcon />
          </NavLink>
          <NavLink to="/favorites" className="header__link-favorites">
            <HeartIcon />
          </NavLink>
          <NavLink to="/cart" className="header__link-cart">
            <CartIcon />
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