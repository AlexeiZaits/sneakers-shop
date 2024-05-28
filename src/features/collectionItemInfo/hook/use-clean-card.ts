import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { resetCard } from "../model/collection-item-slice";

export function useCleanCard(){
    const dispatch = useAppDispatch();
    
    const cleanCard = () => dispatch(resetCard())
    
    return cleanCard
}