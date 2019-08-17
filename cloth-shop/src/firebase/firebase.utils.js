import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOWDp2BDnIFx-I26hNnCembSSjueKTk-I",
  authDomain: "looto-15c90.firebaseapp.com",
  databaseURL: "https://looto-15c90.firebaseio.com",
  projectId: "looto-15c90",
  storageBucket: "looto-15c90.appspot.com",
  messagingSenderId: "816908149891",
  appId: "1:816908149891:web:358e1e367d607ac9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promp: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
