import { createContext, useState, useContext, useEffect } from "react";
import { loggedInUser } from "../api/UserApi";
import { Box, LinearProgress } from "@mui/material";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);
    const [user, setUser] = useState(null);
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    

    const [loading, setLoading] = useState(true)

        useEffect(() => {
            (async () => {
                try {
                    if (loggedIn) {
                        const user = await loggedInUser();
                        setUser(user.data)
                    }
                    setToken(localStorage.getItem("token"));
                    setLoggedIn(token ? true : false);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }
            })()
        }, [])
        useEffect(() => {
            localStorage.setItem("basket", JSON.stringify(basket));
        },[basket])

    const addBasket = (product) => {
        setBasket([...basket, product])
    }
    const deleteBasket = (product) => {
        setBasket(basket.filter((p) => p.id !== product.id))
    }
    const resetBasket = () => {
        setBasket([]);
    }


    
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
        basket,
        addBasket,
        deleteBasket,
        resetBasket
    }
    if (loading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)
export {
    AuthProvider, useAuth
}
