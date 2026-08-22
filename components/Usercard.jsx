import Card from "./layout/Card"
import Buttons from "./layout/Buttons"
import { useAuth } from "../lib/useAuth"

function User() {


  const { user, logout } = useAuth()
  return (
    <div>

    <Card>
   {/*  {!User ? "hello" : <Buttons to="/auth" //onClick={() => console}
    >Connection</Buttons> } */}
    {user ?(
  <>
<p>Hello</p>
<Buttons onClick={logout}>Logout</Buttons>
</>
):(
  <>
  <Buttons to="/auth" //onClick={() => console}
    >Connection</Buttons>

</>
)}
    </Card> 

    </div>
  )
}



export default User