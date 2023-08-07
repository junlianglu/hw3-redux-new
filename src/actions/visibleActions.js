const visibleCounterAction = (isVisible) => ({
  type: "TOGGLE_COUNTER_VISIBILITY",
  payload: isVisible
});

const visibleTdListAction = (isVisible) => ({
  type: "TOGGLE_TDLIST_VISIBILITY",
  payload: isVisible
});

export { visibleCounterAction, visibleTdListAction };
