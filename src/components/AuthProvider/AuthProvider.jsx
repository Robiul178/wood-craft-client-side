import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from '../firebase/firebase.config'
import { GoogleAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    };

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const userLogOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Current User onAuthChange', user)
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
        userLogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;