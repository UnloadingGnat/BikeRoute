import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

function Index() {
  return <App />;
}

ReactDOM.render(<Index />, document.querySelector("#root"));

export default Index;
