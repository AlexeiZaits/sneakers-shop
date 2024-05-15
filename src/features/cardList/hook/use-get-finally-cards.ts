import { useAppSelector } from "@/shared/hooks/storeHooks"
import { filterCardsList, sortingCardList } from "../model/card-list-slice"

export function useGetFinallyCards(){
    const { cardList } = useAppSelector(state => state.cardList)
    const { currentSort } = useAppSelector(state => state.sortContoler)
    const filterObj = useAppSelector(state => state.filterCardsList)
    
    const filterCardList = filterCardsList(filterObj, cardList)
    const sortedCardList = sortingCardList(filterCardList, currentSort)

    return sortedCardList
}