import { clearFilters } from "@/widgets/filter/model/filter-cards-slice"
import { toggleFilter } from "../model/filter-controls-slice"
import { useAppDispatch } from "@/shared/hooks/storeHooks"
import { Button } from "@/shared/ui/button"


export function ClearFilters(){
    const dispatch = useAppDispatch()
    
    function handleClick(){
        dispatch(clearFilters(null))
        dispatch(toggleFilter(false))
    }

    return <Button onClick={handleClick}>
        Clear
    </Button>
}