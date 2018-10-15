const express = require("express");
const bodyParser = require("body-parser");
const firebase = require("firebase-admin");

const serviceAccount = require("./config/serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://songkick-shoutouts.firebaseio.com"
});

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const firebaseConfig = require("./db/index.js");
const shoutDb = firebaseConfig.shoutoutsDb;

app.get("/api/shoutouts", (req, res) => {
  shoutDb.once("value").then(snap => {
    const shoutouts = snap.val();
    res.send(Object.values(shoutouts));
  });
});

app.post("/api/shoutouts", (req, res) => {
  const newRef = shoutDb.push();

  const shoutout = req.body;
  shoutout.createdAt = firebase.database.ServerValue.TIMESTAMP;
  shoutout.id = newRef.key;

  newRef.set(shoutout, error => {
    if (error) {
      res.send(error);
    } else {
      shoutDb.once("value").then(snap => {
        const shoutouts = snap.val();
        res.send(Object.values(shoutouts));
      });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
