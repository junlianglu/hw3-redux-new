import "./styles.css";
import React from "react";
import Counter from "./Counter";
import TdList from "./TdList";
import { connect } from "react-redux";
import * as visibleActions from "./actions/visibleActions";
import {
  getReselectIsCounterVisible,
  getReselectIsTdListVisible
} from "./reducers/visibleReducer";

const HOC = (Component) => {
  return class extends React.PureComponent {
    render() {
      console.log(Component, "HOC Rendering");
      const { visible, visibleHandler, ...rest } = this.props;
      return (
        <div className="HOC">
          <input type="checkbox" checked={visible} onChange={visibleHandler} />
          <label>visible</label>
          {visible && <Component {...rest} />}
        </div>
      );
    }
  };
};

const HOCCounter = HOC(Counter);
const HOCTdList = HOC(TdList);

const ContentContainer = connect(
  (state) => ({
    isCounterVisible: getReselectIsCounterVisible(state),
    isTdListVisible: getReselectIsTdListVisible(state)
  }),
  (dispatch) => ({
    visibleCounterHandler: (e) =>
      dispatch(visibleActions.visibleCounterAction(e.target.checked)),
    visibleTdListHandler: (e) =>
      dispatch(visibleActions.visibleTdListAction(e.target.checked))
  })
)(
  ({
    isCounterVisible,
    isTdListVisible,
    visibleCounterHandler,
    visibleTdListHandler
  }) => {
    console.log("ContentContainer Rendering");
    return (
      <div className="ContentContainer">
        <HOCCounter
          visible={isCounterVisible}
          visibleHandler={visibleCounterHandler}
        />
        <HOCTdList
          visible={isTdListVisible}
          visibleHandler={visibleTdListHandler}
        />
      </div>
    );
  }
);

export default ContentContainer;
