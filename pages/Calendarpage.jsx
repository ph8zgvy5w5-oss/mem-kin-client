import "../styles/loading.module.css"
import Calendar from "../components/Calendar"

function Calendarpage() {

  const tasks = [
    {
      id: 1,
      description: "Buy groceries",
      date: "2026-08-17",
      done: false,
    },
    {
      id: 2,
      description: "Clean the kitchen",
      date: "2026-08-18",
      done: false,
    },
    {
      id: 3,
      description: "Laundry",
      date: "2026-08-18",
      done: true,
    },
    {
      id: 4,
      description: "Prepare dinner",
      date: "2026-08-20",
      done: false,
    },
  ]

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Calendar
        </h1>

        <p className="mt-1 text-gray-500">
          Plan your family's week
        </p>
      </div>

      <Calendar tasks={tasks} />

    </div>
  )
}

export default Calendarpage