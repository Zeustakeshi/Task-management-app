import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";

const AuthContext = createContext();
const AuthProvider = (props) => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            if (user) navigate("/");
            else navigate("/sign-in");
        });
    }, []);
    const values = { userInfo, setUserInfo };

    return (
        <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined")
        throw new Error("useAuth must be used within AuthProvider");
    return context;
};

export { useAuth, AuthProvider };
