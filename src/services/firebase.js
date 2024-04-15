
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgZDJ-u4qBt-3n0yzNgBue1OChypg2Fvk",
  authDomain: "hudson-react-js-coder.firebaseapp.com",
  projectId: "hudson-react-js-coder",
  storageBucket: "hudson-react-js-coder.appspot.com",
  messagingSenderId: "1063959729633",
  appId: "1:1063959729633:web:822cd07c16c8c8e6b26ea0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app) 