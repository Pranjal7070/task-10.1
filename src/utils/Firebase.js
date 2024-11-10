import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0s90FwdEP3V73-vLx0EeUYKv9tyokaMg",
  authDomain: "task7-1p-f1324.firebaseapp.com",
  projectId: "task7-1p-f1324",
  storageBucket: "task7-1p-f1324.appspot.com",
  messagingSenderId: "147381933350",
  appId: "1:147381933350:web:03ada412bd8f2d0d549de7"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  const { email } = userAuth;
  const createdAt = new Date();

  try {
    if (!userSnapshot.exists()) {
      await setDoc(userDocRef, {
        email,
        createdAt,
        ...additionalInformation
      });
    } else {
      await updateDoc(userDocRef, {
        email,
        ...additionalInformation
      });
    }
  } catch (error) {
    console.log('Error in creating or updating user document:', error.message);
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};