import { useEffect } from "react";
import { ICollectionitem } from "../model/collection-item-slice";
import { useLoaderData } from "react-router-dom";
import { useCard } from "./use-card";
import { useSliderLength } from "@/features/sliderControler/hook/use-slider-length";
import { useCleanCard } from "./use-clean-card";

export function useGetCard(){
    const { card } = useLoaderData() as { card: ICollectionitem }
    const [collectionitem, installCard] = useCard()
    const [,setLength] = useSliderLength()
    const cleanCard = useCleanCard()
    
    useEffect(()=> {
        installCard(card)
        setLength(card.imgs.length)
        
        return () => { cleanCard() }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [card])

    return collectionitem
}