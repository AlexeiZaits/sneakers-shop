import { Button } from "@/shared/ui/button"
import { useSort } from "@/shared/hooks/use-sort"
import { SortList } from "@/features/sortList"

export function Sort(){
    const {view, currentSort, handleEvent} = useSort()
    
    return <div onMouseLeave={handleEvent} className="sort">
        {/* className="sort-chosen" */}
        <Button onMouseEnter={handleEvent} >Sort by: {currentSort}</Button>
        {view ? <div className="sort-choice">
            <SortList/>
        </div>: null}
    </div>
}

