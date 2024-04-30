import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from '../firebase/firebase.config'
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [reload, setReload] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    };

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, gitProvider);
    }


    const userLogOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Current User onAuthChange', user);
            setReload(false)
            setUser(user)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logInuser,
        googleSignIn,
        userLogOut,
        githubSignIn,
        reload
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;