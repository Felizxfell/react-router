import { createContext, useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import rolesdata from "./rolesdata";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    let location = useLocation();

    const login = ({ username }) => {
        const permisos = rolesdata.find(roles => roles.rol === username)    
        setUser({ username, permisos })
        location = location?.pathname || '/'
        navigate(location)
        console.log(location);
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }
    
    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}

const AutRouter = (props) => {
    const auth = useAuth()
    if (!auth.user) return <Navigate to="/login" />

    return props.children
}

export {
    AuthProvider,
    useAuth,
    AutRouter
}