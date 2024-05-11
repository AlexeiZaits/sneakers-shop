import { useAppSelector } from "@/shared/hooks/storeHooks"
import { filterCardsList, sortingCardList } from "../model/card-list-slice"

export function useGetFinallyCards(){
    const { cardList, sort } = useAppSelector(state => state.cardList)
    const filterObj = useAppSelector(state => state.filterCardsList)
    
    const filterCardList = filterCardsList(filterObj, cardList)
    const sortedCardList = sortingCardList(filterCardList, sort)

    return sortedCardList
}