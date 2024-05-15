import { useSort } from "@/shared/hooks/use-sort"
import { sortList } from "../lib/sortList"

export function SortList(){
    const {handleClick, currentSort} = useSort()
    
    return <>
    {sortList.map((item) => {
        return <span key={item} 
        onClick={()=>handleClick(item)} 
        className={`sort-choice_item ${currentSort === item ? "sort-choice_active": ""}`}>
        {item}
        </span>
    })}
    </>
}