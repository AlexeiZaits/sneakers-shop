import { getClassNames } from "@/shared/lib/getClassNames";
import { useSort } from "../hook/use-sort"
import { sortList } from "../lib/sortList"
import styles  from "./styles.module.scss";

export function SortList(){
    const [currentSort, setSort] = useSort()
    
    return <>
    {sortList.map((item) => {
        return <span key={item} 
        onClick={()=>setSort(item)} 
        className={getClassNames(currentSort === item, styles, "item", "active")}>
        {item}
        </span>
    })}
    </>
}