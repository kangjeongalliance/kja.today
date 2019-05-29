import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./screens/Main";
import Board from "./screens/Board";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import * as serviceWorker from "./serviceWorker";

import { Firebase, FirebaseContext } from "./firebase";

const routing = (
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/board" component={Board} />
        <Route path="/login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </div>
    </Router>
  </FirebaseContext.Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
