import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// configuration
const app = firebase.initializeApp({
  



  apiKey: "AIzaSyAvJuaGJ99JqGwjVPWWtuPvyLrB1UzoDo4",
  authDomain: "agroauction-spd-a6831.firebaseapp.com",
  projectId: "agroauction-spd-a6831",
  storageBucket: "agroauction-spd-a6831.appspot.com",
  messagingSenderId: "293860524110",
  
 



  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
});



export const timestamp = firebase.firestore.FieldValue.serverTimestamp; //filter the data to get the latest value
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
