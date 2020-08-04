import React from "react";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import Players from "./pages/Players";
import News from "./pages/News";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Roster" component={Roster} />
        <Route path="/Players" component={Players} />
        <Route path="/News" component={News} />
      </Switch>
    </Router>
  );
};

export default App;
