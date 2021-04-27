import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAqdUYJcWmd823n4sZ-6pdWksGalRqYBsE",
  authDomain: "crwn-db-b1b83.firebaseapp.com",
  projectId: "crwn-db-b1b83",
  storageBucket: "crwn-db-b1b83.appspot.com",
  messagingSenderId: "374556461003",
  appId: "1:374556461003:web:532098b7f91a94a6e7984e",
  measurementId: "G-HP0692HHVG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;