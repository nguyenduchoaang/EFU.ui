const SET_MENU = (payload) => {
  return {
    type: "SET_MENU",
    payload: payload,
  };
};

const SET_PLAYLIST = (payload) => {
  return {
    type: "SET_PLAYLIST",
    payload: payload,
  };
};

export { SET_MENU, SET_PLAYLIST };
