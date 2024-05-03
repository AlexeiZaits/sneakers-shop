import { useDispatch } from "react-redux"
import { clearFilters } from "../model/filter-cards-slice"

interface IFilterButtons{
    setFilter: (value: React.SetStateAction<boolean>) => void;

}

export function FilterButtons({setFilter}: IFilterButtons){
    const dispatch = useDispatch()
    function handleClear(){
        dispatch(clearFilters(null))
        setFilter(false)
    }
    function handleConfirm(){
        setFilter(false)
    }
    return <div className="filter-buttons">
    <button onClick={handleClear} className="filter-buttons_item">Clear</button>
    <button onClick={handleConfirm} className="filter-buttons_item">Confirm</button>
    </div>
}