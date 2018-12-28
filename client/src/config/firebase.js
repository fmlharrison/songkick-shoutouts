import * as firebase from "firebase";
import Config from "../config/serviceAccountKey"

const firebaseConfig = process.env.NODE_ENV === 'production' ? Config.firebaseConfigProd : Config.firebaseConfigDev;

firebase.initializeApp(firebaseConfig);

export default firebase;
