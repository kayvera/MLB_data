import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Home />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
