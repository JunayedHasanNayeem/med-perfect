import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";

initAuth()
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    
    //Google sign in
    const signInUsingGoogle = ()=> {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
         .then(result =>{
             setUser(result.user)
            setErrorMessage('')
         })
        .catch(error =>
            setErrorMessage(error.message)
            )
        .finally(()=>{
            setIsLoading(false)
        })
    };

    //Email and password sign up
    const signUpUsingEmail = (email, password, fullName) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            setUserName(fullName)
            setErrorMessage('')
        })
        .catch(error =>
            setErrorMessage(error.message)
            )
    }
    //Email and password sign ins
    const signInUsingEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            setErrorMessage('')
        })
        .catch(error =>
            setErrorMessage(error.message)
            )
    }

    // User logout function
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() =>{
            setUser({})
            setErrorMessage('')
        })
        .finally(()=>{
            setIsLoading(false)
        })
    } 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }  
            setIsLoading(false) 
        })
    }, [])

    //Set displayName for Email sign up
    const setUserName = (fullName) => {
        updateProfile(auth.currentUser, {
            displayName: fullName})
            .then(() => {
            // Profile updated!
            // ...
          })
          .catch(error =>
            setErrorMessage(error.message)
            )
    }

    return{
        user, 
        signInUsingGoogle,
        signUpUsingEmail,
        signInUsingEmail,
        logOut,
        isLoading,
        errorMessage
    }
};

export default useFirebase;