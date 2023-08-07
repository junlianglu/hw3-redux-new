import { createSelector } from "reselect";

const INIT_STATE = {
  isCounterVisible: true,
  isTdListVisible: true
};

const visibleReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_COUNTER_VISIBILITY":
      return { ...state, isCounterVisible: action.payload };
    case "TOGGLE_TDLIST_VISIBILITY":
      return { ...state, isTdListVisible: action.payload };
    default:
      return state;
  }
};

const getIsCounterVisible = (state) => state.visibleReducer.isCounterVisible;
const getIsTdListVisible = (state) => state.visibleReducer.isTdListVisible;

const getReselectIsCounterVisible = createSelector(
  getIsCounterVisible,
  (isCounterVisible) => isCounterVisible
);

const getReselectIsTdListVisible = createSelector(
  getIsTdListVisible,
  (isTdListVisible) => isTdListVisible
);

export default visibleReducer;
export { getReselectIsCounterVisible, getReselectIsTdListVisible };
