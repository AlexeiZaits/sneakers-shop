import { useDispatch } from "react-redux"
import { toggleFilter } from "../model/filter-controls-slice"

export function OpenFilter(){
    const dispatch = useDispatch()
    
    function handleClick(){
        dispatch(toggleFilter(true))
    }
    
    return <span onClick={handleClick} className="filter-title">Filters</span>
}