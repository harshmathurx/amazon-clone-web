import React from "react";
import Header from "./Header.jsx";
import './App.css';
import Home from "./Home.jsx"
import Checkout from "./Checkout.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login.jsx";
import { auth } from "./firebase";
import { useBasketValue } from "./StateProvider.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";

const promise = loadStripe("pk_test_51JJwcwSA9GgheRdlCQ62Pjs4gijdJk1hNTJg8Y1JOhw4joYcpu7xZzUf9Ll0LiCrPcMJrkNyoYFoZTM0u9fjWyaH00dq1iuRNP");

function App() {

  const [{ }, dispatch] = useBasketValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>>" + authUser);

      if (authUser) {
        //user just logged in // the user was already logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <h1>I am payment route</h1> */}
          </Route>
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
