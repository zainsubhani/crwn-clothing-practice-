import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAWPpF83HUy0hJF88ytPT3W2Aa2QCPQ5VM",
  authDomain: "ecommerce-shop-d1b33.firebaseapp.com",
  projectId: "ecommerce-shop-d1b33",
  storageBucket: "ecommerce-shop-d1b33.appspot.com",
  messagingSenderId: "761528601685",
  appId: "1:761528601685:web:99bbaec5978bdfe1ced8dc",
  measurementId: "G-08NNXYHW3J"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
  const {displayName,email } = userAuth;
  const createdAt = new Date();
  
  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    
    })
  } catch (error){
    console.log('error creating user',error.message);
  }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;