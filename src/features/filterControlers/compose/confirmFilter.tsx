
import { Button } from "@/shared/ui/button"
import { toggleFilter } from "../model/filter-controls-slice"
import { useAppDispatch } from "@/shared/hooks/storeHooks"

export function ConfirmFilter(){
    const dispatch = useAppDispatch()
    
    function handleClick(){
        // TODO: Возможно логика подтвеждения фильтров
        dispatch(toggleFilter(false))
    }

    return <Button onClick={handleClick}>
    Confirm
    </Button>
}