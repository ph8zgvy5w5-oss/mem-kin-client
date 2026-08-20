
import { useState } from "react"

function Formpage({ onClose }) {

  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      description,
      date,
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            Create a task
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="mb-1 block text-sm font-medium">
              Task
            </label>

            <input
              type="text"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="What needs to be done?"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            />

          </div>


          <div>

            <label className="mb-1 block text-sm font-medium">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
              className="w-full rounded-xl border border-gray-200 px-4 py-3"
            />

          </div>


          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-black px-5 py-2 text-white"
            >
              Create task
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Formpage