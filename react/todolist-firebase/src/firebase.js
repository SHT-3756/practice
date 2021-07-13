import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCe-ITds-Lm-q3k_O_H6UAkr8k6dtRNx0s",
  authDomain: "todolist-test-ac346.firebaseapp.com",
  projectId: "todolist-test-ac346",
  storageBucket: "todolist-test-ac346.appspot.com",
  messagingSenderId: "907329672351",
  appId: "1:907329672351:web:eb26a38d7da91ccfed3eaa",
  measurementId: "G-ZCDMWVXFSN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
