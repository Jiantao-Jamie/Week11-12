// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeOOvu_Qxf3DxIhiQHWJCox2-xIA4GKvU",
  authDomain: "week7-jiantao.firebaseapp.com",
  projectId: "week7-jiantao",
  storageBucket: "week7-jiantao.appspot.com",
  messagingSenderId: "769720477247",
  appId: "1:769720477247:web:892ab9ccbf82310d333a8a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db