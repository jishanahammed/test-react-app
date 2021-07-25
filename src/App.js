import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Features from "./components/Features/Features";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import ServiceView from "./components/ServiceView/ServiceView";
import "./custom.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/features/">
          <Home />
        </Route>
        <Route path="/serviceView/:id">
          <ServiceView></ServiceView>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
