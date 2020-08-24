import React from "react";

import Home from "./pages/Home";
import Roster from "./pages/Roster";
import Players from "./pages/Players";
import News from "./pages/News";

import styles from "./App.module.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Roster" component={Roster} />
          <Route path="/Players" component={Players} />
          <Route path="/News" component={News} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
