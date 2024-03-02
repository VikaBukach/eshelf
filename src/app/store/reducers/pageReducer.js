const initialState = {
    isLoaded: false,
  };
  
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PAGE_LOADED':
        return {
          ...state,
          isLoaded: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pageReducer;