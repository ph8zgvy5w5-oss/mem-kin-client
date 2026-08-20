
function TaskCard({ task, onToggle }) {
  return (
    <div className="w-55 flex items-center justify-between rounded-2xl border border-gray-200 bg-red-200 p-4 shadow-sm">

      <div className="w-35 flex items-center gap-3">

        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5"
        />

        <div>
          <h3
            className={`font-medium ${
              task.done ? "text-gray-400 line-through" : "text-gray-800"
            }`}
          >
            {task.description}
            {task.assignedTo}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {task.date}
            {task.doneBy}
          </p>
        </div>

      </div>

      <button className="text-gray-400 hover:text-gray-700">
        ⋮
      </button>

    </div>
  )
}

export default TaskCard