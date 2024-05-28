import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { cleanCurrentSort } from "../model/sortListSlice";

export function useCleanSort(){
    const dispatch = useAppDispatch()

    const cleanSort = () => dispatch(cleanCurrentSort())

    return cleanSort
}