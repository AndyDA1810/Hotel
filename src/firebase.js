import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDCOQhOjYZ6KqEj6M2V5ftYQHQof_vu5vI",
  authDomain: "hotel-9d879.firebaseapp.com",
  projectId: "hotel-9d879",
  storageBucket: "hotel-9d879.appspot.com",
  messagingSenderId: "358794587008",
  appId: "1:358794587008:web:30391492e13c721202af65"
};


// Initialize Firebase
app.initializeApp(firebaseConfig);

const db=app.firestore()
const auth=app.auth()
export {db,auth}