const SET_MENU = (payload) => {
  return {
    type: "SELECTED_MENU_WORD",
    payload: payload,
  };
};

const SET_CATEGORY = (payload) => {
  return {
    type: "SELECTED_CATEGORY",
    payload: payload,
  };
};

export { SET_MENU, SET_CATEGORY };
