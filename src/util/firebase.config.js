import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRA-fNYF6rI8YyVJU5yQj7QXlNecZiiQg",
  authDomain: "tech-novation.firebaseapp.com",
  databaseURL: "https://tech-novation.firebaseio.com",
  projectId: "tech-novation",
  storageBucket: "tech-novation.appspot.com",
  messagingSenderId: "323281047271",
  appId: "1:323281047271:web:56cbaea62ab3eb9e875c42",
  measurementId: "G-6YGL2B90YP",
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope("email");

export const signin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      return signin(email, password);
    })
    .then(() => {
      sendEmailVerification();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const sendEmailVerification = () => {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(function () {
      alert("Email Verification Sent!");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signinWithGoogle = (cb) => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      return res.user;
    })
    .then(() => cb())
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signinWithFacebook = (cb) => {
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((res) => {
      return res.user;
    })
    .then(() => cb())
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const updateProfile = (name, photo) => {
  let profile = { displayName: name };

  if (photo) {
    profile = { displayName: name, photoURL: photo };
  }
  firebase
    .auth()
    .currentUser.updateProfile(profile)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanged = (cb) =>
  firebase.auth().onAuthStateChanged(cb);

export default firebase;
