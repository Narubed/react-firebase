// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyALx4LisSyTdc0e6gd5PwGPHkmMZ7WUFsA",
  authDomain: "datatracking-bc995.firebaseapp.com",
  projectId: "datatracking-bc995",
  storageBucket: "datatracking-bc995.appspot.com",
  messagingSenderId: "6074247590",
  appId: "1:6074247590:web:f090c436e1e236f1678767",
  measurementId: "G-HYWPPC48NV"
};

// Initialize Firebase
 const cong = initializeApp(firebaseConfig);
    console.log("export config databasse =>", cong)
  export default cong;
// Now you can use Firebase services in your React app!