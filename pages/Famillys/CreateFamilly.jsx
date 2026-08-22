import { useState } from "react"
import { useFamilly } from "../../lib/useFamilly"
import { useAuth } from "../../lib/useAuth"

export default function CreateFamilly() {
  const { user } = useAuth()
  const { createFamilly, getFamillyById } = useFamilly()

  const [famillyName, setFamillyName] = useState("")
  const [createdFamilly, setCreatedFamilly] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg("")
    setLoading(true)

    if (!user) {
      alert("You must be logged in to create a family.")
      setLoading(false)
      return
    }

    const payload = {
      famillyName: famillyName,
      members: [user._id],
      tasks: [],
    }

    try {
      const newFamillyData = await createFamilly(payload)

      
      if (newFamillyData && newFamillyData.id && getFamillyById) {
        const fetchedFamilly = await getFamillyById(newFamillyData._id)
        setCreatedFamilly(fetchedFamilly)
      } else {
        setCreatedFamilly(newFamillyData || payload)
      }

      setFamillyName("")
    } catch (error) {
      console.error("Erreur:", error)
      setErrorMsg("Impossible to create family. Check the console.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-100 text-taupe-400 p-6 rounded-3xl">
      <div className="w-full max-w-md mx-auto ">
        <h2 className="text-2xl font-bold mb-4">Create a Family</h2>

      
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-raw gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="famillyName" className="font-semibold">
              Family Name
            </label>
            <input
              type="text"
              id="famillyName"
              value={famillyName}
              onChange={(e) => setFamillyName(e.target.value)}
              placeholder="Ex: Famille Dupont"
              className="bg-orange-100 rounded-2xl border border-slate-400 shadow-sm p-4 text-taupe-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full px-6 py-4 bg-[#9be1cc] text-white rounded-xl font-semibold text-lg hover:bg-[#f09678] transition-colors duration-150 active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Creating..." : "Save Family"}
          </button>
        </form>

       
        {createdFamilly && (
          <div className="mt-8 p-6 bg-white rounded-2xl border border-amber-300 shadow-md">
            <h3 className="text-xl font-bold text-emerald-600 mb-2">
              🎉 Family Created Successfully!
            </h3>
            <p>
              <strong>Name:</strong>{" "}
              {createdFamilly.famillyName || createdFamilly.name}
            </p>
            {createdFamilly.id && (
              <p>
                <strong>ID:</strong> {createdFamilly._id}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}