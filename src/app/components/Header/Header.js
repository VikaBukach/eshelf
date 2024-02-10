import React from "react";
import { NavLink } from "react-router-dom";
import { PiScales } from "react-icons/pi";
import { FaRegHeart, FaOpencart } from "react-icons/fa6";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/NavMenuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <header>
        <FaBars className="burger-icon" onClick={handleToggleMenu} />

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/comparison">Comparison</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <span>eShelf</span>

        <input type="search" name="search" placeholder="Search..." />

        <NavLink to="/"></NavLink>
        <NavLink to="/comparing">
          <PiScales />
        </NavLink>
        <NavLink to="/favorites">
          <FaRegHeart />
        </NavLink>
        <NavLink to="/cart">
          <FaOpencart />
        </NavLink>
        <NavLink to="/users">
          <FaRegUserCircle />
        </NavLink>
      </header>
    </>
  );
};

export { Header };
