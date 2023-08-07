import React from "react";
import { connect } from "react-redux";
import * as itemListActions from "./actions/itemListActions";
import {
  getReselectItemList,
  getReselectSortBy
} from "./reducers/itemListReducer";

const ItemList = connect((state) => ({ itemList: getReselectItemList(state) }))(
  class extends React.PureComponent {
    render() {
      console.log("ItemList Rendering");
      const { itemList } = this.props;
      return (
        <div>
          <SortBy />
          {itemList.map((val, i) => (
            <Item key={i} val={val} i={i} />
          ))}
        </div>
      );
    }
  }
);

const SortBy = connect(
  (state) => ({ sortBy: getReselectSortBy(state) }),
  (dispatch) => ({
    sortHandler: (e) => dispatch(itemListActions.sortAction(e.target.value))
  })
)(
  class extends React.PureComponent {
    render() {
      console.log("SortBy Rendering");
      const { sortBy, sortHandler } = this.props;
      return (
        <div>
          <label>Sort By </label>
          <select value={sortBy} onChange={sortHandler}>
            <option value=""></option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      );
    }
  }
);

const Item = connect(null, (dispatch) => ({
  delItemAtHandler: (i) => dispatch(itemListActions.delAtAction(i))
}))(
  class extends React.PureComponent {
    render() {
      console.log("Item Rendering");
      const { val, i, delItemAtHandler } = this.props;
      return (
        <div>
          {val}
          <button onClick={() => delItemAtHandler(i)}>Delete</button>
        </div>
      );
    }
  }
);

export default ItemList;
