import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { ICollectionitem, setCard } from "../model/collection-item-slice";

export function useCard(): [ICollectionitem, (data: ICollectionitem) => void]{
    const dispatch = useAppDispatch()

    const collectionitem = useAppSelector(state => state.collectionItem)

    function installCard(data: ICollectionitem){
        dispatch(setCard(data))
    }
    
    return [collectionitem, installCard]
    
}