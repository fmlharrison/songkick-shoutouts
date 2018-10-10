const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/shoutouts", (req, res) => {
  res.send([
    {
      recipient: "Alice",
      shouter: "Felix",
      message: "For trying so hard to get the crew Glastonbury tickets!!"
    },
    {
      recipient: "Joe",
      shouter: "Alexey",
      message: "For being a kick ass tech lead!!"
    },
    {
      recipient: "Felix",
      shouter: "Joe",
      message: "For beating me so convincingly at table tennis."
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
