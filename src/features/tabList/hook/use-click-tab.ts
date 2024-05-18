import { clearFilters } from "@/features/filterControlers/model/filter-cards-slice"
import { toggleWidjet } from "@/features/togglerWidjets/model/toggler-widjets-slice"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"

export function useClickTab(){
    const dispatch = useAppDispatch()
    const {sidebar} = useAppSelector(state => state.togglerWidjets)
    
    function handleClick(){
        if (sidebar){
            dispatch(toggleWidjet({key: "sidebar"}))
        }
        dispatch(clearFilters())
    }
    
    return {handleClick}
}