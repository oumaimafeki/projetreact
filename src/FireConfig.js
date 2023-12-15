import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
apiKey: "AIzaSyBuEPmFEhzd_e5_eiBrtJ6gO63aaje43H8",
authDomain: "luxury-fragrance.firebaseapp.com",
projectId: "luxury-fragrance",
storageBucket: "luxury-fragrance.appspot.com",
messagingSenderId: "983845763194",
appId: "1:983845763194:web:b969b646360c66150f23c3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
