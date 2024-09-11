// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFOgx6Vo0WHNm17xC7XzFoP4651yduO5s",
  authDomain: "online-jobportal-e8f65.firebaseapp.com",
  projectId: "online-jobportal-e8f65",
  storageBucket: "online-jobportal-e8f65.appspot.com",
  messagingSenderId: "583232061520",
  appId: "1:583232061520:web:5dd67672841cdca7c49155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};