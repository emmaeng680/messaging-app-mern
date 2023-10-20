import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// signInWithPopup


const firebaseConfig = {
  apiKey: "AIzaSyBeAkbRNwVTVBkLA631pZXrkquKXwO9RXc",
  authDomain: "messaging-app-mern-fd82d.firebaseapp.com",
  projectId: "messaging-app-mern-fd82d",
  storageBucket: "messaging-app-mern-fd82d.appspot.com",
  messagingSenderId: "24403887828",
  appId: "1:24403887828:web:48eeb0a4742ef33ad39d41"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

// export const signInWithGoogle = () => {
//     signInWithPopup(auth,provider).then((result) =>{
//       console.log(result);

//     }).catch((error) => {
//       console.log(error);
//     })
// };

// import firebase from 'firebase/app';
// import 'firebase/auth';        // for authentication
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
// import 'firebase/firestore';   // for cloud firestore

// const firebaseConfig = {
//     apiKey: "AIzaSyBeAkbRNwVTVBkLA631pZXrkquKXwO9RXc",
//     authDomain: "messaging-app-mern-fd82d.firebaseapp.com",
//     projectId: "messaging-app-mern-fd82d",
//     storageBucket: "messaging-app-mern-fd82d.appspot.com",
//     messagingSenderId: "24403887828",
//     appId: "1:24403887828:web:48eeb0a4742ef33ad39d41"
//   };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()
// export { auth, provider }
// export default db