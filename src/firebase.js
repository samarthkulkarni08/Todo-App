import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmVtrBHRegliibOAOz1ysfOA3ZnM7_Gwg",
  authDomain: "todo-app-edbea.firebaseapp.com",
  projectId: "todo-app-edbea",
  storageBucket: "todo-app-edbea.appspot.com",
  messagingSenderId: "938764928469",
  appId: "1:938764928469:web:bbe0d9507e60412fbde95c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)