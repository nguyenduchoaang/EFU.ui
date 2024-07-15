import CONSTANTS from "../../based/Constants";

const initState = {
  selectedMenu: 1,
  selectedLevel: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.SELECTED_MENU_WORD:
      const { selected, selectedSub } = action.payload;
      return {
        ...state,
        selectedMenu: selected,
        selectedLevel: selectedSub,
      };
    default:
      return state;
  }
};

export { initState };
export default reducer;
