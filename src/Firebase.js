import firebase, { initializeApp } from "firebase/app"
import "firebase/firestore" 


const firebaseConfig = {
  apiKey: "AIzaSyAS4dUqbj1JPubJNjbMrx3dRx1ZX9Jc2o0",
  authDomain: "rent-6be6b.firebaseapp.com",
  databaseURL: "https://rent-6be6b-default-rtdb.firebaseio.com",
  projectId: "rent-6be6b",
  storageBucket: "rent-6be6b.appspot.com",
  messagingSenderId: "54139371874",
  appId: "1:54139371874:web:c586fd8b61f90ec9e02c3b",
  measurementId: "G-FJJBF39V0J",
};

initializeApp(firebaseConfig)

export default firebase;