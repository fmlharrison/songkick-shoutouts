const express = require("express");
const router = express.Router();

const firebaseConfig = require("../db/index.js");
const shoutDb = firebaseConfig.shoutoutsDb;

router.get("/", (req, res) => {
  shoutDb.once("value").then(snap => {
    const shoutouts = snap.val();
    res.send(Object.values(shoutouts));
  });
});

router.post("/", (req, res) => {
  const newRef = shoutDb.push();

  const shoutout = req.body;
  shoutout.createdAt = firebaseConfig.firebase.database.ServerValue.TIMESTAMP;
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

module.exports = router;
