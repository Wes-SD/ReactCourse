import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";


const config = {
    apiKey: "AIzaSyDbxLFPfuLh6b9hOVeCU5X4qXG7hI-US4Y",
    authDomain: "wes-jones-javascript1.firebaseapp.com",
    projectId: "wes-jones-javascript1",
    storageBucket: "wes-jones-javascript1.appspot.com",
    messagingSenderId: "300839638376",
    appId: "1:300839638376:web:16c517d86881363459f2dd"
  };

firebase.initializeApp(config);
export default firebase;