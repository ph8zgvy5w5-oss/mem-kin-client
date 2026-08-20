import { useState } from "react"
import TaskCard from "../../components/TaskCard"
import Formpage from "./Formpage"
import Button from "../../components/layout/Buttons"


function Taskspage() {
 const [tasks, setTasks] = useState([
  
    {
      id: 1,
      description: "Buy groceries",
      date: "Today",
      done: false,
    },
    {
      id: 2,
      description: "Clean the kitchen",
      date: "Today",
      done: true,
    },
    {
      id: 3,
      description: "Prepare dinner",
      date: "Tomorrow",
      done: false,
    },
  ])
  const [isFormOpen, setIsFormOpen] = useState(false)
  

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  const [filter, setFilter] = useState("all")

  const filteredTasks = tasks.filter((task) => {

  if (filter === "todo") {
    return !task.done
  }

  if (filter === "completed") {
    return task.done
  }

  return true

})

 {filteredTasks.map((task) => (
       <TaskCard
       key={task.id}
       task={task}
       onToggle={toggleTask}
       />
       ))}


       const handleDelete = () => {
        console.log("Task deleted")
       }

  return (
    <div className="p-6 bg-black  ">

   

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Tasks
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your family's daily tasks
          </p>
        </div>

        <button
        onClick={() => setIsFormOpen(true)}
        className="rounded-xl  bg-orange-100 hover:bg-red-200 px-5 py-3 text-taupe-400"
        >
        + Add task
        </button>

        <Button variant="danger" onClick={handleDelete}>
        Delete
        </Button>

    
      </div>


     
      <div className="mb-6 flex gap-2">

        <button onClick={() => setFilter} className="rounded-lg bg-black px-4 py-2 text-sm text-white">
          All
        </button>

        <button onClick={() => setFilter} className="rounded-lg bg-gray-100 px-4 py-2 text-sm">
          To do
        </button>

        <button onClick={() => setFilter} className="rounded-lg bg-gray-100 px-4 py-2 text-sm">
          Completed
        </button>

      </div>


   

      <div className="space-y-3">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
          />
        ))}

        {isFormOpen && (
        <Formpage
        onClose={() => setIsFormOpen(false)}
          />
         )}

      </div>

     

    </div>
  )
}


export default Taskspage