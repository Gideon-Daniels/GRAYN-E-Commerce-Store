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

//init services
const projectFirestore = firebase.firestore()
// project auth is used to autharize users via login and signup
const projectAuth = firebase.auth()
// project storage is used to store file, images and videos
const projectStorage = firebase.storage()

// timestamp is a data and time object
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp, }

















