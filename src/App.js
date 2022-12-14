import './App.css';
import Header from './Header';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from './StateProvider';
import React,{useEffect} from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise= loadStripe(
  "pk_test_51LNpl1B7G6b5GdWbTeyAHkQiEaGrBIidaKqMU8JHE0rrsb0yurCU4GS71A8MgLgvRkDTYHXYtNm7yOLvuhGAqlnR008on59k0O",
);
function App() {
  const[{ },dispatch]=useStateValue();
  useEffect (() => {
   auth.onAuthStateChanged((authUser)=> {
    //console.log("the user is >>>>", authUser);
    if(authUser) {
      //the user just logged in /the user was logged in
      dispatch({
        type: "SET_USER",
        user: authUser,
      })
    }else{
      //the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,

      })
    }
   })

  }, []);


  return (
    <Router>
    <div className="App">
      
     <Switch>
      <Route path='/login'>
      <Login />
      </Route>

      <Route path='/payment'>
        <Elements stripe={promise}>
      <Payment/>
      </Elements>
      </Route>

      <Route path='/checkout'>
      <Header />
      <Checkout/>
      </Route>
      <Route path='/'>
      <Header/>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

