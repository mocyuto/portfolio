import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { load } from "./icon";

load();
ReactDOM.render(<App />, document.getElementById("app"));
