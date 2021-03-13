import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import construction from "./construction.js";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page1 from "./pages/Page1";
import Phone from "./Phone";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      {window.innerHeight <= 750 ? (
        <Route exact path="/" component={Phone} />
      ) : (
        <Route exact path="/" component={App} />
      )}
      <Route path="/About" component={Page1} />
      <Route path="/Experience" component={Page2} />
      <Route path="/Projects" component={Page3} />
      <Route path="/Contact" component={Page4} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
