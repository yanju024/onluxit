import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseApp = firebase.initializeApp(config);

// Use these for db & auth
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({
    prompt: 'select_account'
})


export const singInWithGoogle = () => {

    try {
        auth.signInWithPopup(provider);
    } catch (error) {
        alert(error.message);
    }

}

export const createUserProfile = async (userAuth, additionalData) => {
    
    if(!userAuth) return; 

    const userRef = db.doc(`users/${userAuth.uid}`)

    const userSnapshot = await userRef.get()

    if(!userSnapshot.exits) {
        const { displayName , email} = userAuth;
        const createdAt = new Date()

        try{

            userRef.set({
                displayName, 
                email, 
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log(error)
        }

    }

    console.log(userSnapshot)

    return userRef;

}

export default firebase;
