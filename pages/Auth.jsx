import "../styles/loading.module.css"
import { useState } from "react"
import { useAuth } from "../lib/useAuth"
//import { AuthContext } from "../context/auth.context"

export default function Authpage() {
  const { login, signup } = useAuth()
  //console.log(login, loading)

  const[logginIn, setLogginIn] = useState(true)
  const[userInfo, setUserInfo] = useState({
    email: "", username: "", password:"", role:"", loginInfo:"",
})

const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
/* useEffect(() => {
console.log(userInfo)
}, [userInfo]) */
  if(logginIn){
    return (
    <div className="min-h-screen flex items-center justify-center  ">
   
    <form className="min-h-screen grid items-start gap-8 p-18 shadow-2xl rounded-b-full shadow-red-200" 
      onSubmit={(e) => {
      e.preventDefault()
      const body ={ email: userInfo.loginInfo, password: userInfo.password }
      login(body)
    }}>
       <p className="bg-red-100 rounded-2xl text-blue-950 p-1 text-center"> You don't have an account 👩🏽‍💻 ?{" "} <button className="bg-blue-950 text-amber-50 rounded-2xl cursor-grab" type="button" onClick={() => setLogginIn(false)}>
        Sign up 🔐
       </button>
        </p>
      <label htmlFor="email">Email / Username</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="text" name="loginInfo" onChange={handleChange} value={userInfo.loginInfo} />
      <label htmlFor="password">Password</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="password" name="password" onChange={handleChange} value={userInfo.password}/>
      <button className="bg-black text-amber-50 rounded-2xl cursor-grabbing" type="submit">Login</button>
    </form>

    </div>
    )
  }
   return <div className="h-screen grid items-center justify-center flex-col ">
    <p className="text-center bg-red-100 rounded-2xl text-blue-950 p-1"> Had an account 👩🏽‍💻 ?{" "} <button className="bg-blue-950 text-amber-50 rounded-2xl cursor-grab" type="button" onClick={() => setLogginIn(true)}>
        Connect 🔐
       </button>
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 min-h-screen items-start shadow-2xl rounded-b-full shadow-red-200" 
        onSubmit={(e) => {
        e.preventDefault()
        //const body ={ loginInfo: userInfo.loginInfo, password: userInfo.password }
        signup({ username: userInfo.username, email: userInfo.email, password: userInfo.password, role: userInfo.role },
        setLogginIn, setUserInfo,
        )
       }}
        >
      <label htmlFor="text">Username</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" name="username" type="text" value={userInfo.username} onChange={handleChange}/>
      <label htmlFor="email">Email</label> 
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" name="email" type="text" value={userInfo.email} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" name="password" type="password" value={userInfo.password} onChange={handleChange}/>
      <label htmlFor="role">Member of familly</label>
      <select id="role" name="role" className=" p-1 rounded-3xl shadow-lg shadow-orange-100" value={userInfo.role} onChange={handleChange}> 
      <option value="">-- which member --</option>
      <option value="mother">Mother</option>
      <option value="father">Father</option>
      <option value="grandma">Grandma</option>
      <option value="grandpa">Grandpa</option>
      <option value="child">Child</option>
      <option value="uncle">Uncle</option>
      <option value="aunt">Aunt</option>
      </select>
      <button className="bg-black text-amber-50 rounded-2xl cursor-alias" type="submit">Signup</button>
    </form>
   </div>
}

//mother", "father", "grandma'", "grandpa'", "child", "uncle", "aunt