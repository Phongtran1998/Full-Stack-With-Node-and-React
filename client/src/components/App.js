import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
