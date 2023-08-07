import { createSelector } from "reselect";

const INIT_STATE = {
  inputValue: ""
};

const inputReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const getInputValue = (state) => {
  console.log("SELECTOR - INPUTVALUE");
  return state.inputReducer.inputValue;
};

const getReselectInputValue = createSelector(
  getInputValue,
  (inputValue) => inputValue
);

export default inputReducer;
export { getReselectInputValue };
