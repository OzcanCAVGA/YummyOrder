import { createContext, useState, useContext, useEffect } from "react";
import { loggedInUser } from "../api/UserApi";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
    console.log(loggedIn)

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                if (loggedIn) {
                    const user = await loggedInUser()
                    setUser(user.data)
                }
                setToken(localStorage.getItem("token"))
                setLoggedIn(token ? true : false)
                setLoading(false)
            }catch(error){
                setLoading(false)
            }
    })()
},[])


    const LoginIn = async (response) => {
        setToken(response.token);
        localStorage.setItem('token', response.token)
        window.location.href = '/'
        setUser(user.data)
        setLoggedIn(true)
    }
    const Logout = () => {
        setLoggedIn(false);
        localStorage.removeItem('token')
        setUser(null);
        window.location.href = '/'
    }

    const values = {
        loggedIn,
        setLoggedIn,
        token,
        setToken,
        LoginIn,
        Logout,
        user,
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)
export {
    AuthProvider, useAuth
}
