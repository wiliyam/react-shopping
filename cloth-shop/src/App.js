import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./page/homepage/homepage";
import shopPage from "./page/shop/shop";
import Header from "./component/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={shopPage} exact />
      </Switch>
    </div>
  );
}

export default App;
