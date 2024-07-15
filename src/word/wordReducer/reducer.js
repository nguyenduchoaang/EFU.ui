import CONSTANTS from "../../based/Constants";
import { WordData } from "../Data";
const initState = {
  selectedCategory: 1,
  categories: [],
  selectedMenu: 1,
  selectedLevel: 1,
  showMark: 0,
  listWord: WordData,
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

    case CONSTANTS.ADD_WORD:
      const { item, indexItem } = action.payload;
      const newListWord = [...state.listWord];
      newListWord.splice(indexItem, 0, item);
      return {
        ...state,
        listWord: newListWord,
      };
    case CONSTANTS.REMOVE_WORD:
      return {
        ...state,
        listWord: state.listWord.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { initState };
export default reducer;
