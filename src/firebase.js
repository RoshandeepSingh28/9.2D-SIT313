import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv9jNNfWsTTf67mAMQKcht1EAsTgFL48o",
  authDomain: "sit313-week7.firebaseapp.com",
  projectId: "sit313-week7",
  storageBucket: "sit313-week7.appspot.com",
  messagingSenderId: "518532493677",
  appId: "1:518532493677:web:2732ca690d489cc451ea64",
  measurementId: "G-2BD57X7X4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const imageDb = getStorage(app)