const incAction = () => ({
  type: "INC"
});

const decAction = () => ({
  type: "DEC"
});

const incIfOddAction = () => {
  return (dispatch, getState) => {
    const {
      countReducer: { count }
    } = getState();
    if (count % 2) {
      dispatch(incAction());
    }
  };
};

const incDelayAction = (delay) => {
  return (dispatch) => {
    setTimeout(() => dispatch(incAction()), delay * 1000);
  };
};

const timerButtonAction = (timerButtonVal) => ({
  type: "SET_TIMER_BUTTON_VAL",
  payload: timerButtonVal
});

const intervalIdAction = (setIntervalId) => ({
  type: "SET_INTERVAL_ID",
  payload: setIntervalId
});

const incTimerAction = () => {
  return (dispatch, getState) => {
    const {
      countReducer: { timerButtonVal, setIntervalId }
    } = getState();
    if (timerButtonVal === "Start") {
      dispatch(timerButtonAction("Stop"));
      dispatch(
        intervalIdAction(setInterval(() => dispatch(incAction()), 1000))
      );
    } else {
      dispatch(timerButtonAction("Start"));
      clearInterval(setIntervalId);
    }
  };
};

export {
  incAction,
  decAction,
  incIfOddAction,
  incDelayAction,
  timerButtonAction,
  intervalIdAction,
  incTimerAction
};
