import React from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./App.js";
import "./index.css";

function Index() {
  return <SimpleMap />;
  
}

ReactDOM.render(<Index />, document.querySelector("#root"));

export default Index;
