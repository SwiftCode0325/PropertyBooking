import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
import { app } from "../firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUpdateTrigger, setUserUpdateTrigger] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  // observer
  useEffect(() => {
    setLoading(true)
    if (!user && localStorage.getItem('email')) {
      fetch(`http://localhost:5000/api/users/${localStorage.getItem('email')}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setUser(data[0])
            setLoading(false)
          } else {
            setLoading(false)
          }
        });
    } else {
      setLoading(false)
    }
  }, [!userUpdateTrigger]);



  const authInfo = {
    user,
    setUser,
    logOut,
    googleLogin,
    loading,
    setUserUpdateTrigger,
    userUpdateTrigger
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
