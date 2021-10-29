import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/functions'

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

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const projectFunctions = firebase.functions()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp, projectFunctions } 