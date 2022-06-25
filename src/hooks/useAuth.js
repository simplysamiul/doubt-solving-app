import { useEffect, useState } from "react";
import initializeAuth from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import AuthService from "../manageApi/Auth.Service";
import { useNavigate } from "react-router-dom";


// initialize firebase
initializeAuth();

const useAuth = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();


    // Create user by password
    const createUser = (email, password, name, role) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            setError("");
            const newUser = {email, displayName: name, role};
            setUser(newUser);
            // Send user info in database
            AuthService.userRegister(newUser)
            .then(res => {
                //redirect to home page after create account
                navigate("/");
                window.location.reload();
                console.log(res)})
            .catch(error => setError(error.message))
            // send name to the firebase
            updateProfile(auth.currentUser, {
                displayName: name
            })
        
        .then(() =>{})
        .catch(()=>{})
        })
        .catch((error)=> {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .finally(() => setIsLoading(false))
    };

    // Login user
    const loginUser = (email, password, location) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            setError("");
            // Pgae redirect
            const destination = location?.state?.from || "/";
                navigate(destination);
        })
        .catch((error =>{
            const errorMessage = error.message;
            setError(errorMessage);
        }))
        .finally(() => setIsLoading(false))
    };
     // Observer
     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
           if(user){
              setUser(user);
           }else{
               setUser({});
           }
           setIsLoading(false);
       });
       return () => unSubscribe;
   }, [auth]);


    // check role
    useEffect(() =>{
        AuthService.getSpecificUser(user.email)
        .then(res => {
            setRole(res.role);
        })
        .catch(error => {})
    },[user.email]);

   // Log Out 
   const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{
        setUser({});
        setRole("");
    })
    .catch((error)=>{

    })
    .finally(()=> setIsLoading(false));
};


   return{
    user,
    error,
    isLoading,
    createUser,
    loginUser,
    logOut,
    role
   }
}


export default useAuth