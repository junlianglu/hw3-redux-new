import React from "react";
import { connect } from "react-redux";
import * as inputActions from "./actions/inputActions";
import * as itemListActions from "./actions/itemListActions";
import { getReselectInputValue } from "./reducers/inputReducer";
import ItemList from "./ItemList";

class TdList extends React.PureComponent {
  render() {
    console.log("TdList Rendering");
    return (
      <div>
        <ItemList />
        <InputField />
      </div>
    );
  }
}

const InputField = connect(
  (state) => ({ inputValue: getReselectInputValue(state) }),
  (dispatch) => ({
    inputHandler: (e) => dispatch(inputActions.inputAction(e.target.value)),
    addItemHandler: (val) => {
      dispatch(itemListActions.addAction(val));
      dispatch(inputActions.inputAction(""));
    }
  })
)(
  class extends React.PureComponent {
    render() {
      console.log("InputField Rendering");
      const { inputValue, inputHandler, addItemHandler } = this.props;
      return (
        <div>
          <input value={inputValue} onChange={inputHandler} />
          <button onClick={() => addItemHandler(inputValue)}>Add</button>
        </div>
      );
    }
  }
);

export default TdList;
