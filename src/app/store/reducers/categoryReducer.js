import { SET_ACTIVE_CATEGORY, RESET_ACTIVE_CATEGORIES } from "../actions/categoryActions";

const initialState = {
  activeCategory: null,
  activeCategories: {
    smartphones: false,
    "e-readers": false,
    headphones: false,
    laptops: false,
    monitors: false,
    mouses: false,
    "portable-speakers": false,
    quadcopters: false,
    smartwatches: false,
    tablets: false,
    tv: false,
    pc: false,
  },
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      const category = action.payload;
      const updatedCategories = { ...state.activeCategories };
      Object.keys(updatedCategories).forEach((key) => {
        updatedCategories[key] = key === category;
      });
      return {
        ...state,
        activeCategory: category,
        activeCategories: updatedCategories,
      };
    case RESET_ACTIVE_CATEGORIES:
      return {
        ...state,
        activeCategory: null,
        activeCategories: initialState.activeCategories,
      };
    default:
      return state;
  }
};

export default categoryReducer;
