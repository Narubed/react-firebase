import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getFirestore,
  getAnalytics,
  initializeApp,
  getAuth,
} from "firebase/firestore";
// import admin from("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyALx4LisSyTdc0e6gd5PwGPHkmMZ7WUFsA",
  authDomain: "datatracking-bc995.firebaseapp.com",
  projectId: "datatracking-bc995",
  storageBucket: "datatracking-bc995.appspot.com",
  messagingSenderId: "6074247590",
  appId: "1:6074247590:web:f090c436e1e236f1678767",
  measurementId: "G-HYWPPC48NV",
  // apiKey: "AIzaSyATKyTSJVN7-Zx60WQ66kkHo3nBhuMhYDs",
  // authDomain: "meteor-3fd94.firebaseapp.com",
  // projectId: "meteor-3fd94",
  // storageBucket: "meteor-3fd94.appspot.com",
  // messagingSenderId: "391620415322",
  // appId: "1:391620415322:web:6848292646d9e91e6e6d63",
  // measurementId: "G-69J20TCH7X",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const auth = getAuth(app);
// export { db, auth};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// admin.initializeApp(firebaseApp);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
