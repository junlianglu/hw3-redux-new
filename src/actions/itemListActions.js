const addAction = (val) => ({
  type: "ADD",
  payload: val
});

const delAtAction = (i) => ({
  type: "DEL_AT",
  payload: i
});

const sortAction = (sortBy) => ({
  type: "SORT",
  payload: sortBy
});

export { addAction, delAtAction, sortAction };
