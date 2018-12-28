import app from "firebase/app";
import "firebase/database";
import Config from "./serviceAccountKey";

const firebaseConfig =
  process.env.NODE_ENV === "production"
    ? Config.firebaseConfigProd
    : Config.firebaseConfigDev;

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.database = app.database();
  }

  databaseReference = () => this.database.ref("shoutouts");

  databaseTimeStamp = () => app.database.ServerValue.TIMESTAMP;
}

export default Firebase;
