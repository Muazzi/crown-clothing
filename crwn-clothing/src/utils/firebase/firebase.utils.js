// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore , doc,getDoc , setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7rYRjdlzwi9ouioVEYmBnR1iAJBoy6WM",
  authDomain: "crwn-clothing-36a66.firebaseapp.com",
  projectId: "crwn-clothing-36a66",
  storageBucket: "crwn-clothing-36a66.appspot.com",
  messagingSenderId: "504496371233",
  appId: "1:504496371233:web:f6356086c2c29179231560",
  measurementId: "G-XHZRBB3FJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const firestore = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = doc(firestore, 'users',userAuth.uid);
  const snapShot = await getDoc(userRef);
  if(!snapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}