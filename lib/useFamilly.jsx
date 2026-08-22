import { useContext } from "react"
import { FamillyContext } from "../context/familly.context"

export function useFamilly() {
    const ctx = useContext(FamillyContext)
    if (!ctx){
        throw new Error("Must provide valid context")
    }
  return ctx
  
}