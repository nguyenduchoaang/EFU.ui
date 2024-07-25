const initStates = {
  menuSelected: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        menuSelected: action.payload,
      };
    default:
      return state;
  }
};

export { initStates };
export default reducer;
