import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBeeV1k8LWE1Ae3owRuBhIJKLphMzV4wds",
    authDomain: "grayn-e-commerce-store-a47f2.firebaseapp.com",
    projectId: "grayn-e-commerce-store-a47f2",
    storageBucket: "grayn-e-commerce-store-a47f2.appspot.com",
    messagingSenderId: "989695572664",
    appId: "1:989695572664:web:631f1682986b1b988cd24d"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp, } 