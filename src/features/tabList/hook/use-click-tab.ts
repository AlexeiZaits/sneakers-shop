import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { clearFilters } from "@/widgets/filter/model/filter-cards-slice"
import { toggleSidebar } from "@/widgets/sidebar/model/sidebar-slice"

export function useClickTab(){
    const dispatch = useAppDispatch()
    const sidebarView = useAppSelector(state => state.sidebar)
    
    function handleClick(){
        if (sidebarView){
            dispatch(toggleSidebar(null))
        }
        dispatch(clearFilters(null))
    }
    
    return {handleClick}
}