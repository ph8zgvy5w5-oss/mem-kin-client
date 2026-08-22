
import { useState } from "react"
import { useFamilly } from "../../lib/useFamilly"

export default function AddMember() {
  const { addMemberFamilly, currentFamilly } = useFamilly()

  const [memberType, setMemberType] = useState("existing")
  const [emailOrId, setEmailOrId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [role, setRole] = useState("Enfant")

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg("")
    setMessage("")
    setLoading(true)

    const famillyId = currentFamilly?.id || currentFamilly?._id

    if (!famillyId) {
      setErrorMsg("No active family found to add a member.")
      setLoading(false)
      return
    }

    try {
      if (memberType === "existing") {
        await addMemberFamilly(famillyId, {
          memberId: emailOrId,
        })
      } else {
        await addMemberFamilly(famillyId, {
          name: firstName,
          role: role,
        })
      }

      setMessage("Member added successfully!")
      setEmailOrId("")
      setFirstName("")
    } catch (error) {
      console.error("Error:", error)
      setErrorMsg("Failed to add member. Check the console.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-100 text-taupe-400 p-6 rounded-3xl">
      <div className="w-full max-w-md mx-auto bg-white/60 p-6 rounded-3xl border border-slate-300 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Add a Family Member</h2>

        <div className="flex gap-2 mb-6 bg-orange-100 p-1 rounded-2xl border border-slate-300">
          <button
            type="button"
            onClick={() => setMemberType("existing")}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${
              memberType === "existing"
                ? "bg-[#9be1cc] text-white shadow-sm"
                : "text-slate-600 hover:text-black"
            }`}
          >
            Has an account
          </button>
          <button
            type="button"
            onClick={() => setMemberType("virtual")}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${
              memberType === "virtual"
                ? "bg-[#9be1cc] text-white shadow-sm"
                : "text-slate-600 hover:text-black"
            }`}
          >
            No account
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-sm">
            {errorMsg}
          </div>
        )}

        {message && (
          <div className="mb-4 p-3 bg-emerald-100 text-emerald-700 rounded-xl text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {memberType === "existing" ? (
            <div className="flex flex-col gap-1">
              <label htmlFor="emailOrId" className="font-semibold text-sm">
                User Email or ID
              </label>
              <input
                type="text"
                id="emailOrId"
                value={emailOrId}
                onChange={(e) => setEmailOrId(e.target.value)}
                placeholder="Ex: member@email.com"
                className="bg-orange-100 rounded-2xl border border-slate-400 shadow-sm p-4 text-taupe-400"
                required
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="font-semibold text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Ex: Lucas"
                  className="bg-orange-100 rounded-2xl border border-slate-400 shadow-sm p-4 text-taupe-400"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="role" className="font-semibold text-sm">
                  Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-orange-100 rounded-2xl border border-slate-400 shadow-sm p-4 text-taupe-400"
                >
                  <option value="Enfant">Child</option>
                  <option value="Parent">Parent</option>
                  <option value="Grand-parent">Grandparent</option>
                  <option value="Autre">Other</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full px-6 py-4 bg-[#9be1cc] text-white rounded-xl font-semibold text-lg hover:bg-[#f09678] transition-colors duration-150 active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  )
}