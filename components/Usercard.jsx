import Card from "./layout/Card"
import Buttons from "./layout/Buttons"
//import ProfileMember from "./ProfileMember"
function User() {

  //const { user, setUser }
  return (
    <div>

    <Card>
    {!User ? "hello" : <Buttons to="/auth" //onClick={() => console.log("click ok")}
    >Connection</Buttons> }
    </Card> 

    </div>
  )
}

export default User