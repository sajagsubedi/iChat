import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyChNTdXGE2ZDx2LPwLU8jzsrUs16yacaus",
  authDomain: "ichat-99ef3.firebaseapp.com",
  projectId: "ichat-99ef3",
  storageBucket: "ichat-99ef3.appspot.com",
  messagingSenderId: "699134727286",
  appId: "1:699134727286:web:31dbd96ba58bb88fec3b57",
}).auth();
