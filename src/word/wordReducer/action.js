import CONSTANTS from "../../based/Constants";
const SET_MENU = (payload) => {
  return {
    type: CONSTANTS.SELECTED_MENU_WORD,
    payload: payload,
  };
};

export { SET_MENU };
