import CONSTANTS from "../../based/Constants";
const SET_MENU = (payload) => {
  return {
    type: CONSTANTS.SELECTED_MENU_WORD,
    payload: payload,
  };
};

const SET_CATEGORY = (payload) => {
  return {
    type: CONSTANTS.SELECTED_CATEGORY,
    payload: payload,
  };
};

const SHOW_MARK = (payload) => {
  return {
    type: CONSTANTS.SHOW_MARK,
    payload: payload,
  };
};

export { SET_MENU, SET_CATEGORY, SHOW_MARK };
