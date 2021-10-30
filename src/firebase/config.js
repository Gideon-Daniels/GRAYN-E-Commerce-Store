import firebase from 'firebase/compat/app'
// importing firebase services
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGQv0FYP55WizUkTB6PS7Q8FKGXM1flw4",
    authDomain: "grayn-e-commerce-store-5e2b8.firebaseapp.com",
    projectId: "grayn-e-commerce-store-5e2b8",
    storageBucket: "grayn-e-commerce-store-5e2b8.appspot.com",
    messagingSenderId: "677019520746",
    appId: "1:677019520746:web:88d4e14c7a9c2536ad9193"
  };
// init firebase
firebase.initializeApp(firebaseConfig)
// creating firebase auth instance
const projectAuth = firebase.auth()
// creating instance of firestore
const projectFirestore = firebase.firestore()
// creating instance of timestamp function
const timestamp = firebase.firestore.FieldValue.serverTimestamp

const projectStorage = firebase.storage()
// exporting
export { projectFirestore, projectAuth, projectStorage, timestamp, }

















