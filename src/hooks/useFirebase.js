import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const history = useHistory();


    //sign up functionality
    const signUpUser = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                }).then(() => {

                    history.push('/');
                })

            })
    }

    //sign in functionality
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);

                history.push('/');
            })

    }




    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                history.push('/');
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        signUpUser,
        signInUser
    }
}

export default useFirebase;