export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const RESET_ACTIVE_CATEGORIES = "RESET_ACTIVE_CATEGORIES";

export const setActiveCategory = (category) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: category,
  };
};

export const resetActiveCategories = () => {
  return {
    type: RESET_ACTIVE_CATEGORIES,
  };
};
