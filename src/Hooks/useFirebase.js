import { GoogleAuthProvider,getAuth,signOut,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initFirebase from "../components/Firebase/firebase.init";


initFirebase();
const useFirebase = () =>{
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const auth = getAuth();
    
    const signInGoogle = () =>{
      setLoading(true)
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(() => setLoading(false));
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUser(user);
              // ...
            } else {
              // User is signed out
              // ...
              setUser({});
            }
            setLoading(false)
          });
        
    },[])
    
    const logOut = ()=>{
      setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setLoading(false));
    }
    return{
        user,
        logOut,
        signInGoogle,
        loading
    }

}
export default useFirebase;

