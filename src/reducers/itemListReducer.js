import { createSelector } from "reselect";

const INIT_STATE = {
  itemList: [],
  sortBy: ""
};

const itemListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, itemList: [...state.itemList, action.payload] };
    case "DEL_AT":
      return {
        ...state,
        itemList: state.itemList.filter((val, i) => i !== action.payload)
      };
    case "SORT":
      const sortBy = action.payload;
      if (!sortBy) {
        return { ...state, sortBy: sortBy };
      }
      const itemList = [...state.itemList];
      itemList.sort();
      if (sortBy === "Z-A") {
        itemList.reverse();
      }
      return { ...state, itemList: itemList, sortBy: sortBy };
    default:
      return state;
  }
};

const getItemList = (state) => state.itemListReducer.itemList;
const getSortBy = (state) => state.itemListReducer.sortBy;

const getReselectItemList = createSelector(getItemList, (itemList) => itemList);
const getReselectSortBy = createSelector(getSortBy, (sortBy) => sortBy);

export default itemListReducer;
export { getReselectItemList, getReselectSortBy };
