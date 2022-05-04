const initialState = {
  selectedCusineNumber: "1",
};

const menuPageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_CATEGORY":
      return { ...state, selectedCusineNumber: payload };
    default:
      return state;
  }
};

export default menuPageReducer;
