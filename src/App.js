import "./styles.css";
import ContentContainer from "./ContentContainer";
import React from "react";

const App = () => {
  console.log("App Rendering");
  return (
    <div className="App">
      <ContentContainer />
    </div>
  );
};

export default App;
