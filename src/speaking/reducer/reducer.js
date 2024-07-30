const initStates = {
  menuSelected: 1,
  playList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        menuSelected: action.payload,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playList: action.payload,
      };
    default:
      return state;
  }
};

export { initStates };
export default reducer;
