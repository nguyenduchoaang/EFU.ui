import CONSTANTS from "../../based/Constants";

const initState = {
  selectedCategory: 1,
  categories: [],
  selectedMenu: 1,
  selectedLevel: 1,
  showMark: 0,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case CONSTANTS.SELECTED_MENU_WORD:
      const { selected, selectedSub } = action.payload;
      return {
        ...state,
        selectedMenu: selected,
        selectedLevel: selectedSub,
      };
    case CONSTANTS.SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case CONSTANTS.SHOW_MARK:
      return {
        ...state,
        showMark: action.payload === state.showMark ? 0 : action.payload,
      };
    default:
      return state;
  }
};

export { initState };
export default reducer;
