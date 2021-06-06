import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5iFTrqHVg3OZhzO5CoQygtzpakjB-fzc',
  authDomain: 'crwn-db-8ce5e.firebaseapp.com',
  projectId: 'crwn-db-8ce5e',
  storageBucket: 'crwn-db-8ce5e.appspot.com',
  messagingSenderId: '71451794033',
  appId: '1:71451794033:web:d92b45e1936a47a86f19d0',
  measurementId: 'G-P4676TXD9P',
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
        ...additionalData,
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
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
