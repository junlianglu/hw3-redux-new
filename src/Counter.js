import React from "react";
import { connect } from "react-redux";
import * as countActions from "./actions/countActions";
import {
  getReselectCount,
  getReselectTimerButtonVal
} from "./reducers/countReducer";

class Counter extends React.PureComponent {
  render() {
    console.log("Counter Rendering");
    const {
      incHandler,
      decHandler,
      incIfOddHandler,
      incDelay1sHandler
    } = this.props;
    return (
      <div>
        <Count />
        <ButtonRow
          button1Name="-"
          button2Name="+"
          button1Handler={decHandler}
          button2Handler={incHandler}
        />
        <ButtonRow
          button1Name="+ (if odd)"
          button2Name="+ (delay 1s)"
          button1Handler={incIfOddHandler}
          button2Handler={incDelay1sHandler}
        />
        <StartButton />
      </div>
    );
  }
}

const Count = connect((state) => ({ count: getReselectCount(state) }))(
  class extends React.PureComponent {
    render() {
      console.log("Count Rendering");
      const { count } = this.props;
      return <h1>{count}</h1>;
    }
  }
);

class ButtonRow extends React.PureComponent {
  render() {
    console.log("ButtonRow Rendering");
    const {
      button1Name,
      button2Name,
      button1Handler,
      button2Handler
    } = this.props;
    return (
      <div>
        <button onClick={button1Handler}>{button1Name}</button>
        <button onClick={button2Handler}>{button2Name}</button>
      </div>
    );
  }
}

const StartButton = connect(
  (state) => ({ timerButtonVal: getReselectTimerButtonVal(state) }),
  (dispatch) => ({
    incTimerHandler: () => dispatch(countActions.incTimerAction())
  })
)(
  class extends React.PureComponent {
    render() {
      console.log("StartButton Rendering");
      const { timerButtonVal, incTimerHandler } = this.props;
      return <button onClick={incTimerHandler}>{timerButtonVal}</button>;
    }
  }
);

export default connect(null, (dispatch) => ({
  incHandler: () => dispatch(countActions.incAction()),
  decHandler: () => dispatch(countActions.decAction()),
  incIfOddHandler: () => dispatch(countActions.incIfOddAction()),
  incDelay1sHandler: () => dispatch(countActions.incDelayAction(1))
}))(Counter);
