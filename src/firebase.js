import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAYkB_ERku1QpFGcwhJf3fwbs2Xs-Uw3lA",
  authDomain: "firestore-auth-1-447c0.firebaseapp.com",
  projectId: "firestore-auth-1-447c0",
  storageBucket: "firestore-auth-1-447c0.appspot.com",
  messagingSenderId: "665193302329",
  appId: "1:665193302329:web:50d1d1d4396876e7df40e8"
};

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const db=firebase.firestore();
const auth=firebase.auth();
const marcaTiempo=firebase.firestore.FieldValue.serverTimestamp

firebase.getCurrentUser=() => {
    return new Promise((resolve, reject)=>{
        const unsuscribe=firebase.auth().onAuthStateChanged(user => {
            unsuscribe()
            resolve(user)
        }, reject)
    })
}
export { db, auth, marcaTiempo, firebase }