import React from "react";
import Header from "./Header.jsx";
import './App.css';
import Home from "./Home.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/checkout">
            <Header />
            <h1>I am here to checkout</h1>
          </Route> */}

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
