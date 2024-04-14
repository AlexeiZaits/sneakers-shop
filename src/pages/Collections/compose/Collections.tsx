import { useLocation } from "react-router-dom"


export function Collections(){
    const location = useLocation()
    return <div className="main">
        <p>{location.pathname}</p>
    </div>
}
