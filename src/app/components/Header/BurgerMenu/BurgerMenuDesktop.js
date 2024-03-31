import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory, resetActiveCategories } from "../../../store/actions/categoryActions";
import { closeBurgerMenu } from "../../../store/actions/burgerMenuActions";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../../assets/images/Logo.svg";
//import { ReactComponent as BalanceIcon } from "../../../../assets/images/Balance.svg";
import { ReactComponent as HeartIcon } from "../../../../assets/images/Heart.svg";
import { ReactComponent as CartIcon } from "../../../../assets/images/Cart.svg";
import { ReactComponent as UserIcon } from "../../../../assets/images/Profile page.svg";
import { ReactComponent as CloseIcon } from "../../../../assets/images/times-solid.svg";
import { ReactComponent as MobileIcon } from "../../../../assets/images/burger-menu/mobile-phone.svg";
// import { ReactComponent as EreadersIcon } from "../../../../assets/images/burger-menu/Frame 252.svg";
// import { ReactComponent as HeadphonesIcon } from "../../../../assets/images/burger-menu/Headphones.svg";
// import { ReactComponent as LaptopIcon } from "../../../../assets/images/burger-menu/LapTop.svg";
// import { ReactComponent as TvIcon } from "../../../../assets/images/burger-menu/Tv.svg";
// import { ReactComponent as PcIcon } from "../../../../assets/images/burger-menu/Pc.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/images/burger-menu/Arrow.svg";
import { ReactComponent as ArrowIconBack } from "../../../../assets/images/burger-menu/ArrowBack.svg";

import { useModal } from "../../../hooks/useModal";
import Cart from "../../Cart";

const BurgerMenuDesktop = ({ onClose, history }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.burgerMenu.isOpen);
  const activeCategories = useSelector((state) => state.category.activeCategories);

  const { open } = useModal();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleCloseMenu = () => {
    dispatch(closeBurgerMenu());
    onClose();
  };

  const handleNavLinkClick = () => {
    handleCloseMenu();
    history.push("/");
  };

  const toggleCategories = (category, isActive) => {
    if (isActive) {
      dispatch(setActiveCategory(category));
    } else {
      dispatch(resetActiveCategories());
    }
  };

  const handleBackButtonClick = () => {
    dispatch(resetActiveCategories());
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
        <div ref={menuRef} className="burger-menu__categories">
          <nav>
            <h2>Catalog</h2>
            <ul>
              {Object.keys(activeCategories).map((category) => (
                <li
                  className="category-link"
                  key={category}

                  //onMouseEnter={() => toggleCategories(category, true)}
                  //onMouseLeave={() => toggleCategories(category, false)}}
                >
                  <div className="category-link-wrapper">
                    <MobileIcon className={`category-image ${activeCategories[category] ? "active" : "not-active"}`} />
                    <NavLink to={`/${category}`}  onClick={handleNavLinkClick}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </NavLink>
                  </div>
                  <ArrowIcon onClick={() => toggleCategories(category)} />
                  {activeCategories[category] && (
                    <ul className="subcategory-menu">
                      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                      <NavLink className="subcategory-menu_link" onClick={handleBackButtonClick}>
                        <ArrowIconBack />
                        All categories
                      </NavLink>
                      <div>{category.charAt(0).toUpperCase() + category.slice(1)} subcategory1</div>
                      <div>{category.charAt(0).toUpperCase() + category.slice(1)} subcategory2</div>
                      <div>{category.charAt(0).toUpperCase() + category.slice(1)} subcategory3</div>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuDesktop;
