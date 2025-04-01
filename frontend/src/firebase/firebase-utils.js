import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const firebaseApp = firebase.initializeApp(config);

// Use these for db & auth
export const db = firebaseApp.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const singInWithGoogle = () => {
  try {
    auth.signInWithPopup(provider);
  } catch (error) {
    alert(error.message);
  }
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  if (userAuth) {
    const userRef = await db?.doc(`users/${userAuth?.uid}`);

    const userSnapshot = await userRef?.get();

    if (!userSnapshot?.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log(error);
      }
    }

    return userRef;
  }
};

export default firebase;
