import * as firebase from 'firebase';

import { default as firebaseConfig } from '../firebase.config.json';

firebase.initializeApp(firebaseConfig);

export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => fireAuth.signInWithPopup(googleProvider);

export const signInWithEmail = (email, password) => fireAuth.signInWithEmailAndPassword(email, password);

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribeFn = fireAuth.onAuthStateChanged(user => {
      unsubscribeFn();

      resolve(user);
    }, reject);
  });

export const createUserProfileDocument = async (user, additionalData = {}) => {
  if (!user) return;

  const docRef = fireStore.doc(`users/${user.uid}`);
  const docSnapshot = await docRef.get();

  if (!docSnapshot.exists) {
    const { displayName, email, createdAt = new Date() } = user;
    try {
      await docRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return docRef;
};

export default firebase;

export const addCollectionAndDocuments = async (key, values = []) => {
  const collectionRef = fireStore.collection(key);

  const batch = fireStore.batch();

  values.forEach(val => batch.set(collectionRef.doc(), val));

  return await batch.commit();
};

export const mapCollectionsSnapshot = (collections = { docs: [] }) =>
  collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      title,
      items,
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
    };
  })
    .reduce((acc, col) => ({ ...acc, [col.title.toLowerCase()]: col }), {});
