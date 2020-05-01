import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.json";
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();