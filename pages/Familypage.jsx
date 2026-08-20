import "../styles/loading.module.css"
import { useState } from "react"
import FamilyMember from "../components/FamilyMember"

function Familypage() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Emma",
      role: "Parent",
    },
    {
      id: 2,
      name: "Alex",
      role: "Parent",
    },
  ])

  const [isFormOpen, setIsFormOpen] = useState(false)

  const [name, setName] = useState("")
  const [role, setRole] = useState("Member")

  const addMember = (event) => {
    event.preventDefault()

    if (!name.trim()) return

    const newMember = {
      id: Date.now(),
      name,
      role,
    }

    setMembers([...members, newMember])

    setName("")
    setRole("Member")
    setIsFormOpen(false)
  }

  return (
    <div className="p-6">
      

      <div className="mb-8">
        <p className="text-sm text-gray-500">
          Your family
        </p>

        <h1 className="text-3xl font-bold">
          The Smith Family
        </h1>
      </div>

      

      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Family Members
          </h2>

          <button
            onClick={() => setIsFormOpen(true)}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            + Add member
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <FamilyMember
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>

      

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Add a family member
              </h2>

              <button onClick={() => setIsFormOpen(false)}>
                ✕
              </button>
            </div>

            <form
              onSubmit={addMember}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-72 bg-red-200 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
                  placeholder="Family member name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm">
                  Role
                </label>

                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="w-full rounded-xl border p-3"
                >
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Member">Member</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-xl px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-black px-4 py-2 text-white"
                >
                  Add member
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}

export default Familypage
