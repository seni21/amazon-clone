const functions = require("firebase-functions");
const express = require ("express");
const cors = require ("cors");
// const { response } = require("express");

const stripe = require ("stripe")(
"sk_test_51LNpl1B7G6b5GdWbScVRGSCbeWUESIeHBWLNiraS7mxxJwSK31eO8za8z5oui2BbhMTKNjaLv24D9sA6lrW9DSUS00GzdHR6Ua",
);


//app config
const app = express ();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: 'usd',
      });
        // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

});

///http://localhost:5001/clone-c6973/us-central1/api);


//listen command 
exports.api = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
