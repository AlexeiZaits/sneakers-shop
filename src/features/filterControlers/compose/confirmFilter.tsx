import { useDispatch } from "react-redux"
import { toggleFilter } from "../model/filter-controls-slice"

export function ConfirmFilter(){
    const dispatch = useDispatch()
    
    function handleClick(){
        dispatch(toggleFilter(false))
    }
    return <button onClick={handleClick} className="filter-buttons_item">Confirm</button>
}