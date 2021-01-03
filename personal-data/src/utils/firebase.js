import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwipmq4hqlMh1TA__n7G_W3A-kBsoeF60",
    authDomain: "personal-info-3adb0.firebaseapp.com",
    projectId: "personal-info-3adb0",
    storageBucket: "personal-info-3adb0.appspot.com",
    messagingSenderId: "702644925590",
    appId: "1:702644925590:web:be4d1cd5d1ea22db2e3eb7",
    measurementId: "G-NB0YEX89LD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }