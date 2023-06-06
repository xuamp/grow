import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD081gYvSha3vdzC7FzkzkvjWWd81q9gcU",
  authDomain: "base02-dami.firebaseapp.com",
  projectId: "base02-dami",
  storageBucket: "base02-dami.appspot.com",
  messagingSenderId: "1073248744846",
  appId: "1:1073248744846:web:1437c99708d6f46f94a0df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productCollection = collection(db, "productos");

//datos de cada producto
// foto, precio, descripcion, nombre, categoria
