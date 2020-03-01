import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Hello = () => <p>Hello World!</p>;

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
      </Switch>
    </Router>
  );
};

export default Routes;
