import React from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import News from "./pages/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/myTeam" component={Teams} />
        <Route path="/Players" component={Players} />
        <Route path="/News" component={News} />
      </Switch>
    </Router>
  );
}
