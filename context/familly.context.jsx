import { createContext, useState, useEffect } from "react"
import api from "../lib/api"
import { useNavigate } from "react-router-dom"

 const FamillyContext = createContext()

export default function FamillyProvider({ children }) {
    //const [user, setUser ] = useState(null)
    const [familly, setFamilly] = useState(null)
    const [currentFamilly, setCurrentFamilly] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const navigate = useNavigate()

    const getAllUsers = async () => {
      try {
        const response = await api.get("/user")
        return response.data
      } catch (error) {
        console.log(error)
        return []
      }
    }

    const createFamillyWithMembers = async (famillyName, selectedMemberIds) => {
    try {
      const response = await api.post("/familly/create", {
        famillyName: famillyName,
        members: selectedMemberIds,
      })
      setCurrentFamilly(response.data)
      if (response.status === 201) navigate("/familly")
      return response.data
    } catch (error) {
      console.error("Error creating family:", error)
      throw error
    }
  }

  const updateFamillyMembers = async (famillyId, updatedMemberIds) => {
    try {
      const response = await api.put(`/familly/${famillyId}`, {
        members: updatedMemberIds,
      })
      setCurrentFamilly(response.data)
      return response.data
    } catch (error) {
      console.error("Error updating family members:", error)
      throw error
    }
  }

    const getFamilly = async () => {
      try {
        const response = await api.get(`/familly`)

        setFamilly(response.data)
      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false)
      }
    }

     const getAllFamilly = async () =>{
      try {
        const response = await api.get(`/familly`)
        setFamilly(response.data)
        
      } catch (error) {
        console.log(error.response)
      } finally{
        setLoading(false)
      }
    }
    const createFamilly = async (body) => {
      try {
        const response = await api.post("/familly/create", body)
        getFamilly()
        setCurrentFamilly(response.data)

        if (response.status === 201) navigate("/familly")
        return response.data
      } catch (error) {
        console.log(error.response)
        throw error
      }
    }

    const getFamillyById = async (famillyId) => {
    try {
      const response = await api.get(`/familly/${famillyId}`)
      setCurrentFamilly(response.data)
      return response.data
    } catch (error) {
      console.error("cant get familly:", error)
    }
  }

    const addMemberFamilly = async (familly_id) =>{
      try {
        const response = await api.put(`/familly/${familly_id}`)
        getFamilly()

        return response.data
      
      } catch (error) {
        console.log(error)
        throw error
      }
    }

    const deleteFamillyMember = async (User_id) =>{
      try {
        const response = await api.delete(`/familly/${User_id}`)
        getFamilly()
        if (response.status === 200 || response.status === 204) {
          console.log("Member has been deleted")
        }
      } catch (error) {
        console.log("error when member has been deleted:",error)
      }
    }
    
    

    useEffect(() => {
      getFamilly()
    }, [])




  return (
    <FamillyContext.Provider value={{ currentFamilly, familly, loading, getFamillyById, createFamilly, addMemberFamilly, getAllFamilly, deleteFamillyMember, getAllUsers, createFamillyWithMembers, updateFamillyMembers  }}>
    {children}
    </FamillyContext.Provider>
  )
    }


export { FamillyContext }
