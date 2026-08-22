import { createContext, useState, useEffect } from "react"
import api from "../lib/api"
import { useNavigate } from "react-router-dom"
const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const login = async (body) => {
        try {
            setLoading(true)
            console.log(body)
            const response = await api.post("/user/login", body)
            if (response.status === 200 ){
                setUser(response.data.user)
                localStorage.setItem("authToken", response.data.token)
                navigate("/family")
            }
        } catch (error) {
            console.log(error)
            console.log(error.response)
        } finally {
            setLoading(false)
            
        }
    }

    const signup = async (body, setLogginIn, setUserInfo) => {
        try {
            setLoading(true)
            console.log(body)
            const response = await api.post("/user/signup", body)

            if (response.status === 201){
                setLogginIn(true)
                setUserInfo({
                    email: "",
                    username: "",
                    password: "",
                    role: "",
                    famillyMember: "",
                })
            }
        } catch (error) {
            console.log(error.message)

        } finally{
            setLoading(false)
        }
    }

    const verify = async () => {
        try {
            setLoading(true)
            const response = await api.get("user/verify")
            console.log("response in verify", response)
            if (response.status === 200) setUser(response.data)
        } catch (error) {

            localStorage.clear()
            setUser(null)
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.clear(),
        navigate("/auth")
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken")
        if (token) {
            verify()
        }
    }, [])


    return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
        {children}
    </AuthContext.Provider>
}

export { AuthContext }


    