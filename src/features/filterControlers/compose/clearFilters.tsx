import { clearFilters } from "@/widgets/filter/model/filter-cards-slice"
import { useDispatch } from "react-redux"
import { toggleFilter } from "../model/filter-controls-slice"

export function ClearFilters(){
    const dispatch = useDispatch()
    
    function handleClick(){
        dispatch(clearFilters(null))
        dispatch(toggleFilter(false))
    }

    return <button onClick={handleClick} className="filter-buttons_item">Clear</button>
}