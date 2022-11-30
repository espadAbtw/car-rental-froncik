import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth' 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdND55Ola9D7c2lRFadsM6LRPGBX3KQ4E",
    authDomain: "car-rental-c455f.firebaseapp.com",
    projectId: "car-rental-c455f",
    storageBucket: "car-rental-c455f.appspot.com",
    messagingSenderId: "1080560071949",
    appId: "1:1080560071949:web:d8faa65825600ae3b26c44"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
 });
 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider);