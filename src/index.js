import React from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./App.js";

function Index() {
  return <SimpleMap />;
}

ReactDOM.render(<Index />, document.querySelector("#root"));

export default Index;
