import React from "react";
import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeui8vqRHMRwlx7zg2mxxXBxizEq_daiM",
  authDomain: "kja-today.firebaseapp.com",
  databaseURL: "https://kja-today.firebaseio.com",
  projectId: "kja-today",
  storageBucket: "kja-today.appspot.com",
  messagingSenderId: "848576323680",
  appId: "1:848576323680:web:5cd90fd75fbaa614"
};

export class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export const FirebaseContext = React.createContext(null);
