import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { setCurrentSort } from "../model/sortListSlice";

export function useSort(): [string, (sort: string) => void]{
    const dispatch = useAppDispatch()
    const {currentSort} = useAppSelector(state => state.sortContoler)
    
    const setSort = (sort: string) => dispatch(setCurrentSort(sort))

    return [currentSort, setSort]
}