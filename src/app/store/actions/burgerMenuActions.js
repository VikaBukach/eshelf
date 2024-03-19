export const OPEN_BURGER_MENU = "OPEN_BURGER_MENU";
export const CLOSE_BURGER_MENU = "CLOSE_BURGER_MENU";

export const openBurgerMenu = () => {
  return {
    type: OPEN_BURGER_MENU
  };
};

export const closeBurgerMenu = () => {
  return {
    type: CLOSE_BURGER_MENU
  };
};