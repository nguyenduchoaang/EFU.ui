import { CONST_PRACTICE_WORD } from "../../based/Constants";
import { TotalWord, RememberWord, KnownWord } from "../Data";
const initState = {
  selectedMenuItem: 1,
  totalWord: TotalWord,
  rememberWord: RememberWord,
  knownWord: KnownWord,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONST_PRACTICE_WORD.SELECTED_MENU_WORD:
      return {
        ...state,
        selectedMenuItem: action.payload,
      };
    default:
      return state;
  }
};

export { initState };
export default reducer;
