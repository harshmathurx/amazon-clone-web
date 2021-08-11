/* eslint-disable indent */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51JJwcwSA9GgheRdlCeJuQ9kjMxaZqQU7khkaezggLFP4gYRnE5JsZA5pxNFqOxnolv0BfqMybZV6ZuSevYzpCkdU00XtmP9LXm");

// API


// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());
// API - routes
app.get("/", function(req, res) {
    res.status(200).send("Hello Boys");
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "inr",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  // - Listen command
  exports.api = functions.https.onRequest(app);
  