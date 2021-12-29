import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC86zt4Xb2cM-HktoX2EmhFsp9jCCDmulc",
  authDomain: "doctorsportalproject.firebaseapp.com",
  projectId: "doctorsportalproject",
  storageBucket: "doctorsportalproject.appspot.com",
  messagingSenderId: "780947880234",
  appId: "1:780947880234:web:d8bd59b761dffa9e8a0653"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)