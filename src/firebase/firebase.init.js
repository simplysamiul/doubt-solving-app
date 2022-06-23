import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuth = () =>{
    initializeApp(firebaseConfig);
};

export default initializeAuth;
