import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { setCardsSlider } from "../model/sliderListSlice"
import { ICard } from "@/features/cardList/lib/interfaces"

export function useSliderList(): [ICard[], (cards: ICard[]) => void]{
    const dispatch = useAppDispatch()
    const { cardsSlider }  = useAppSelector(state => state.sliderList)
    
    const setCards = (cards: ICard[]) => dispatch(setCardsSlider(cards))

    return [cardsSlider, setCards]
}