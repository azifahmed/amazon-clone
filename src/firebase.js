import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC9dBt8VPiCZReUB2EwGoPXaFd5geY90gU",
    authDomain: "clone-a42fc.firebaseapp.com",
    databaseURL: "https://clone-a42fc.firebaseio.com",
    projectId: "clone-a42fc",
    storageBucket: "clone-a42fc.appspot.com",
    messagingSenderId: "710724792216",
    appId: "1:710724792216:web:b9286b7b658346c24705ed",
    measurementId: "G-KD7CTGW4JV"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };