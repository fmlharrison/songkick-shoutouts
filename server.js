const express = require("express");
const bodyParser = require("body-parser");
const firebase = require("firebase-admin");

const app = express();
const port = process.env.PORT || 8080;

const serviceAccount = require("./config/serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://songkick-shoutouts.firebaseio.com"
});

const shoutouts = require("./routes/shoutouts.js")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/shoutouts", shoutouts)

app.listen(port, () => console.log(`Listening on port ${port}`));
