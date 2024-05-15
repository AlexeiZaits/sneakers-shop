import { useLocation } from "react-router-dom"

export function useLocationLast(){
    const location = useLocation()
    const url = location.pathname.split("/").slice(-1)[0]

    return { url }
}