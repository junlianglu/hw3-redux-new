import { createSelector } from "reselect";

const INIT_STATE = {
  count: 0,
  timerButtonVal: "Start",
  setIntervalId: null
};

const countReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "SET_TIMER_BUTTON_VAL":
      return { ...state, timerButtonVal: action.payload };
    case "SET_INTERVAL_ID":
      return { ...state, setIntervalId: action.payload };
    default:
      return state;
  }
};

const getCount = (state) => {
  console.log("SELECTOR - COUNT");
  return state.countReducer.count;
};
const getTimerButtonVal = (state) => {
  console.log("SELECTOR - TIMERBUTTONVAL");
  return state.countReducer.timerButtonVal;
};

const getReselectCount = createSelector(getCount, (count) => count);
const getReselectTimerButtonVal = createSelector(
  getTimerButtonVal,
  (timerButtonVal) => timerButtonVal
);

export default countReducer;
export { getReselectCount, getReselectTimerButtonVal };
