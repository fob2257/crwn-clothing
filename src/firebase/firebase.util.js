import * as firebase from 'firebase';

import { default as firebaseConfig } from './firebase.config.json';

firebase.initializeApp(firebaseConfig);

export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => fireAuth.signInWithPopup(provider);

export default firebase;
