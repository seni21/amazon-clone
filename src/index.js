import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const functions = require("firebase-functions");
// const express = require ("express");
// const cors = require ("cors");
// // const { response } = require("express");

// const stripe = require ("stripe")(
// "sk_test_51LNpl1B7G6b5GdWbScVRGSCbeWUESIeHBWLNiraS7mxxJwSK31eO8za8z5oui2BbhMTKNjaLv24D9sA6lrW9DSUS00GzdHR6Ua",
// );


// //app config
// const app = express ();

// //middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// app.get("/", (request, response) => response.status(200).send("hello world"));


// app.post('/payments/create', async (request, response) => {
//     const total = request.query.total;
  
//     console.log('Payment Request Recieved for this amount >>> ', total);
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, // subunits of the currency
//         currency: 'usd',
//       });
//         // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   })

// });

// ///http://localhost:5001/clone-c6973/us-central1/api);


// //listen command 
// exports.api = functions.https.onRequest(app);
