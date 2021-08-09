import React from "react";
import Header from "./Header.jsx";
import './App.css';
import Home from "./Home.jsx"
import Checkout from "./Checkout.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
