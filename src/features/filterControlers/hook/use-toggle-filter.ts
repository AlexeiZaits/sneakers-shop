import { useAppDispatch } from "@/shared/hooks/storeHooks"
import { clearFilters } from "../model/filter-cards-slice"
import { toggleFilter } from "../model/filter-controls-slice"

export function useToggleFilter(){
    const dispatch = useAppDispatch()
    
    function handleEvent(clear?: boolean){
        dispatch(toggleFilter(null))
        clear && dispatch(clearFilters())
    }

    return {handleEvent}
}