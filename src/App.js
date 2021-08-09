import React from "react";
import Header from "./Header.jsx";
import './App.css';
import Home from "./Home.jsx"
import Checkout from "./Checkout.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login.jsx";
function App() {
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
