const express = require('express');
const functions = require('firebase-functions');

const app = express();
app.use('/', proxy());

export default functions.https.onRequest(app);
