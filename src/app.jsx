import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import App from './components/App'

//const template = <div>Hello world!</div>;

ReactDOM.render(<App/>, document.getElementById("app"));
