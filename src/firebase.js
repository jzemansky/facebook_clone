// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTSszYrdJ4khb1adNviRNoPhs8XJpONss",
    authDomain: "fb-clone-4ba9a.firebaseapp.com",
    projectId: "fb-clone-4ba9a",
    storageBucket: "fb-clone-4ba9a.appspot.com",
    messagingSenderId: "499809168901",
    appId: "1:499809168901:web:13601ea07badeabc0cf66c",
    measurementId: "G-W8KPLC29DK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;