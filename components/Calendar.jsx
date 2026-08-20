import { useState } from "react"

function Calendar({ tasks }) {

  const [currentDate, setCurrentDate] = useState(new Date())


  
  const getMonday = (date) => {

    const current = new Date(date)

    const day = current.getDay()

   
    const difference = day === 0 ? -6 : 1 - day

    current.setDate(current.getDate() + difference)

    return current
  }


  const monday = getMonday(currentDate)


  const weekDays = Array.from({ length: 7 }, (_, index) => {

    const date = new Date(monday)

    date.setDate(monday.getDate() + index)

    return date
  })



  const nextWeek = () => {

    setCurrentDate((previousDate) => {

      const next = new Date(previousDate)

      next.setDate(next.getDate() + 7)

      return next
    })
  }



  const previousWeek = () => {

    setCurrentDate((previousDate) => {

      const previous = new Date(previousDate)

      previous.setDate(previous.getDate() - 7)

      return previous
    })
  }


 
  const formatDate = (date) => {

    return date.toISOString().split("T")[0]
  }


  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

     

      <div className="mb-6 flex items-center justify-between">

        <button
          onClick={previousWeek}
          className="rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200"
        >
          ← Previous
        </button>


        <h2 className="text-lg font-semibold">

          {monday.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}

          {" - "}

          {weekDays[6].toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}

        </h2>


        <button
          onClick={nextWeek}
          className="rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200"
        >
          Next →
        </button>

      </div>


  

      <div className="grid grid-cols-7 gap-3">

        {weekDays.map((day) => {

          const dateString = formatDate(day)


       
          const dayTasks = tasks.filter(
            (task) => task.date === dateString
          )


          return (
            <div
              key={dateString}
              className="min-h-64 rounded-xl bg-gray-50 p-3"
            >

          

              <div className="mb-4">

                <p className="text-sm font-medium text-gray-500">

                  {day.toLocaleDateString("en-US", {
                    weekday: "short",
                  })}

                </p>

                <p className="text-xl font-bold">

                  {day.getDate()}

                </p>

              </div>


            

              <div className="space-y-2">

                {dayTasks.map((task) => (

                  <div
                    key={task.id}
                    className={`rounded-lg p-2 text-sm ${
                      task.done
                        ? "bg-gray-200 text-gray-400 line-through"
                        : "bg-white shadow-sm"
                    }`}
                  >

                    {task.description}

                  </div>

                ))}

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Calendar