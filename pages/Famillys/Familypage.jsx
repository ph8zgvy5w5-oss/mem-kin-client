//import { useEffect, useState } from "react"
//import FamilyMember from "../components/FamilyMember"
//import { useFamilly } from "../lib/useFamilly"
import AddAMember from "./AddAMember"
import CreateFamilly from "./CreateFamilly"


function Familypage() {

 


  return (

     <div className=" flex flex-col p-10  ">
        <div>



        </div>
      <CreateFamilly />
<br />
      <AddAMember />

  </div>

  

  )
 


  /* const { familly } = useFamilly()

  const [isFormOpen, setIsFormOpen] = useState(false)

  const [name, setName] = useState("")
  const [role, setRole] = useState("Member")

  const addUserToFamilly = (event) => {
    event.preventDefault()

    if (!name.trim()) return

   

    console.log({
      famillyId: familly._id,
      name,
      role,
    })

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
          {familly?.famillyName}
        </h1>
      </div>


    

      <div className="mb-8">

        <div className="mb-4 flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            Family members
          </h2>

          <button
            onClick={() => setIsFormOpen(true)}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            + Add member
          </button>

        </div>


        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {familly?.users?.map((user) => (
            <FamilyMember
              key={user._id}
              user={user}
            />
          ))}

        </div>

      </div>


    

      /* {isFormOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                Add a member to {familly?.famillyName}
              </h2>

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>

            </div>


            <form
              onSubmit={addUserToFamilly}
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
                  className="w-full rounded-xl border p-3"
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
  ) */
}

export default Familypage 