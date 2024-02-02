// FirebaseContext.js
import React, { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const FirebaseContext = createContext(auth);

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={auth}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider, auth };
