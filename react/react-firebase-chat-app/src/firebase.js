import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyADm8pyTYWjo5SuvzBZRFhxW_AclV6qoU8",
  authDomain: "react-firebase-chat-app-8e110.firebaseapp.com",
  projectId: "react-firebase-chat-app-8e110",
  storageBucket: "react-firebase-chat-app-8e110.appspot.com",
  messagingSenderId: "133020965843",
  appId: "1:133020965843:web:9a0bdaae314b2a84632d26",
  measurementId: "G-JVH2YW6JGL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
