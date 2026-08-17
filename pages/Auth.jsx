import "../styles/loading.module.css"
import { useState } from "react"
import { useAuth } from "../lib/useAuth"

export default function Authpage() {
  const { login, loading } = useAuth()
  //console.log(login, loading)

  const[logginIn, setLogginIn] = useState(true)
  const[userInfo, setUserInfo] = useState({
    email: "", username: "", password:"",
})

  if(logginIn){
    return (
    <div className="h-screen flex items-center justify-center  ">
    <form className="h-screen flex items-center justify-center gap-2 p-18 shadow-2xl rounded-b-full shadow-red-200" >
      <label htmlFor="email">Email / Username</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="text" />
      <label htmlFor="password">Password</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="password" />
    </form>

    </div>
    )
  }
   return <div className="h-screen flex items-center justify-center flex-col ">
    <form className="h-screen flex items-center justify-center gap-2 p-18 shadow-2xl rounded-b-full shadow-red-200">
      <label htmlFor="text">Username</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="text" value={userInfo.username}/>
      <label htmlFor="email">Email</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="text" value={userInfo.email} />
      <label htmlFor="password">Password</label>
      <input className=" p-1 rounded-3xl shadow-lg shadow-orange-100" type="password" valuer={userInfo.password}/>
    </form>
   </div>
}
