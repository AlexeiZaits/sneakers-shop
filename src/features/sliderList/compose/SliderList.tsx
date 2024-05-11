import { useState } from "react";
import { SliderItem } from "@/entities/sliderItem";
import { useSetCarusel } from "../hooks/useSetCarusel";
import { visibleCardList } from "@/features/cardList/model/card-list-slice";
import { useAppSelector } from "@/shared/hooks/storeHooks";
import { useGetCards } from "../hooks/useGetCards";

export function SliderList(){
    const {cardList} = useAppSelector(state => state.cardList)
    const [currentCard, setCurrenCard] = useState(0)
    const [carusel, setCarusel] = useState(false)
    const filterCardList = visibleCardList(cardList, "new")
    
    useGetCards()
    useSetCarusel(filterCardList, carusel, setCarusel, setCurrenCard)

    return <>
            {filterCardList.length && filterCardList.map((item, index) => {
                return <SliderItem key={index} item={item} index={index} currentCard={currentCard}/> 
            })}
        </>
}


