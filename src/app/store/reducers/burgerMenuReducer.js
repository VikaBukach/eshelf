import { OPEN_BURGER_MENU, CLOSE_BURGER_MENU } from "../actions/burgerMenuActions";

const initialState = {
  isOpen: false,
};

const burgerMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BURGER_MENU:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_BURGER_MENU:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default burgerMenuReducer;
