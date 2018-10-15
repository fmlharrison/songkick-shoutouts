const firebase = require("firebase-admin");

const shoutoutsDb = firebase.database().ref("shoutouts");

module.exports = {
  shoutoutsDb
}