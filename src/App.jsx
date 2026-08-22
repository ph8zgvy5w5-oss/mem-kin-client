import { Route, Routes } from "react-router"
import Dashbordpage from "../pages/Dashbordpage"
import Authpage from "../pages/Auth"
import Formpage from "../pages/Tasks/Formpage"
import Taskspage from "../pages/Tasks/Taskspage"
import Calendarpage from "../pages/Calendarpage"
import { LayoutDashboard, Layers, Calendar, User , Settings, LifeBuoy } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/Sidebar"
import Profilpage from "../pages/Profilpage"
import Usercard from "../components/Usercard"
import Loading from "../components/Loading"
import Familypage from "../pages/Famillys/Familypage"
import NotFound from "../pages/NotFound"
import CreateFamilly from "../pages/Famillys/CreateFamilly"

function App() {
  

return (
  <div className="bg-taupe-400 ">
    <h1 className=" text-center"> <Usercard /> </h1>
    <div className="bg-taupe-400 flex"> 
    
     <div className="flex">
        <Sidebar >
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" active />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/tasks/tasks" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/calendar" />
          <SidebarItem icon={<User size={20} />} text="Family" to="/Family" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Profile Member" to="/Profile" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Link" to="/*" />
        </Sidebar> 
      </div>
    
<Loading />
  <Routes>
    <Route path="/" element={<Dashbordpage />} />
    <Route path="/auth" element={<Authpage />} />
    <Route path="/tasks/tasks" element={<Taskspage />} />
    <Route path="/tasks/form" element={<Formpage />} />
    <Route path="/calendar" element={<Calendarpage />} />
    <Route path="/family" element={<Familypage />} />
    <Route path="/family/create" element={<CreateFamilly />} />
    <Route path="/profile" element={<Profilpage />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
 
    </div>
    
    </div>
  )
}

export default App
