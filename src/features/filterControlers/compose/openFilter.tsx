import { useAppDispatch } from "@/shared/hooks/storeHooks"
import { toggleFilter } from "../model/filter-controls-slice"
import { Button } from "@/shared/ui/button"


export function OpenFilter(){
    const dispatch = useAppDispatch()
    
    function handleClick(){
        dispatch(toggleFilter(true))
    }
    
    return  <Button onMouseEnter={handleClick} >
        Filters
    </Button>
}