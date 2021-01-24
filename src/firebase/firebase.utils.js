import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBXdBo9hew2_wQMWUT6JDuf8OuyRfOex7o",
    authDomain: "ecom-b279b.firebaseapp.com",
    projectId: "ecom-b279b",
    storageBucket: "ecom-b279b.appspot.com",
    messagingSenderId: "108793748584",
    appId: "1:108793748584:web:ef681a804579ed9cd66fdd",
    measurementId: "G-SFGHY06JHL"

};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;