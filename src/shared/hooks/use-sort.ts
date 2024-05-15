import { setCurrentSort } from "@/features/sortList/model/sortListSlice"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { useToggler } from "@/shared/hooks/use-toggler"

export function useSort(){
    const dispatch = useAppDispatch()
    const { currentSort } = useAppSelector(state => state.sortContoler)
    const { view, handleEvent } = useToggler()
    
    function handleClick(item: string){
        handleEvent()
        dispatch(setCurrentSort(item))
    }
    
    return {currentSort, view, handleClick, handleEvent}
}