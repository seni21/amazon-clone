import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // const removeFromBasket = () => {
  //   dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  // };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello, Almaz@gmail.com </h3>
        <h2 className="checkout__title">Your shopping Basket </h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <div>
          <Subtotal />
        </div>
      </div>
    </div>
  );
  
}

export default Checkout;





// import './App.css'
// import Header from './Header'
// import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
// import Checkout from './Checkout';
// import Home from './Home'
// import React, { useEffect } from "react";
// import Login from './Login';
// import { auth } from "./firebase";
// import { useStateValue } from "./Stateprovider";
// import Payment from "./Payment"
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js" 
// const promise = loadStripe("pk_test_51LKa8EKYVRMXo1QnplcDTY0jS3lxoMqvK9zLVaXz9NzUPNtjyyOmzbSKIPqp5QoOm6Ez9AZJSO9o1nGz9T5u0KTR00oiWjxXO9")
// function App() {
//    const [{}, dispatch] = useStateValue();
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       // console.log("THE USER IS >>> ", authUser);
//       if (authUser) {
//         // the user just logged in / the user was logged in
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
