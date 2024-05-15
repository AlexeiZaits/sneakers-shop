import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { removeValue, setValue } from "../model/filter-cards-slice"

export function useFilterItem(){
    const filterCardsList = useAppSelector(state => state.filterCardsList)
    const dispatch = useAppDispatch()
    
    function handleClick(key:string|number, value:string){
        if(!filterCardsList[key].includes(value)) 
            {dispatch(setValue({key: key, value:value}))}
        else {
            dispatch(removeValue({key: key, value: value}))
        }
    }

    return {handleClick, filterCardsList}
}