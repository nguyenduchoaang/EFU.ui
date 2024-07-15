import CONSTANTS from "../../based/Constants";

const initState = {
  selectedCategory: 1,
  categories: [],
  selectedMenu: 1,
  selectedLevel: 1,
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
    default:
      return state;
  }
};

export { initState };
export default reducer;
