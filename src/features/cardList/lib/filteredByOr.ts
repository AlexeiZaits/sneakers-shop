import { IFilterCards } from "@/features/filterControlers/lib/interface"
import { ICard, initialStateFilter } from "./interfaces"
import { visibleCardList } from "../model/card-list-slice"

export function filteredByOr(filterSwitches: IFilterCards, initialState: initialStateFilter, cardList: ICard[]){
    
    for (const key in filterSwitches){
        for (const item of filterSwitches[key]){
            if (initialState[key].length) initialState[key] = [...initialState[key] ,...visibleCardList(cardList, key, item)]
            else {
                initialState[key] = visibleCardList(cardList, key, item)
            }
        }
    }

    return initialState
    
}