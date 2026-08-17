import Card from "../components/layout/Card"
import Buttons from "../components/layout/Buttons"
//import { navigate } from "react-router"
//import Sidebar from "../components/Sidebar";

function Dashboard() {
  return ( 
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <h2 className="text-lg font-semibold text-gray-800">
          My Tasks
          
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Today you have tasks</p>
<br />
          <Buttons variant="primary" to="/tasks/tasks">
          All Tasks</Buttons>

      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-800">
          Planning
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          See your familly's Planning</p>
<br />
          <Buttons variant="primary" to="/calendar">
          Planning </Buttons>

        
      </Card>

    </div>
  );
}

export default Dashboard