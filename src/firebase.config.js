import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALOIC1IKaVWaAPxetMObzgZag5ZR0Vd7c",
  authDomain: "noteffy-b943d.firebaseapp.com",
  databaseURL: "https://noteffy-b943d-default-rtdb.firebaseio.com",
  projectId: "noteffy-b943d",
  storageBucket: "noteffy-b943d.appspot.com",
  messagingSenderId: "637283968790",
  appId: "1:637283968790:web:760a50d06a47773bd35237",
  measurementId: "G-53DKGZ41V6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
