import * as firebase from "firebase";
import { firebaseConfig } from "../config/serviceAccountKey"

firebase.initializeApp(firebaseConfig);

export default firebase;
