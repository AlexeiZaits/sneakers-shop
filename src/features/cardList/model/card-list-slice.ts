import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard, initialStateFilter } from "../lib/interfaces";
import { compareNew, comparePriceHigh, comparePriceLow } from "../lib/compare";
import { IFilterCards } from "@/widgets/filter/lib/interface";
import { mergeList } from "../lib/mergeList";
import { createInitialState } from "../lib/createInitialState";
import { getNewList } from "../lib/getNewLIst";

interface ICardListSlice {
    cardList: ICard[],
}

export const initialState: ICardListSlice = {
    cardList: [],
}

export const CardListSlice = createSlice({
    name: "@cardList",
    initialState,
    reducers: {
        setCardList: (state, action: PayloadAction<ICard[]>) => {
            state.cardList = action.payload
        },
    }
})

export const { setCardList } = CardListSlice.actions;

export function visibleCardList(cardList: ICard[] = [],  filter: string|undefined, valueFilter?: string){
    switch (filter) {
        case "new":
            return cardList.filter((data: ICard) => data.isNew === true)
        case "men":
            return cardList.filter((data: ICard)=> data.sex === "man")
        case "women":
            return cardList.filter((data: ICard)=> data.sex === "woman")
        case "price":
            if (!valueFilter) return cardList
            const lowPrice = +valueFilter.split("-")[0]
            const highPrice = +valueFilter.split("-")[1]
            return cardList.filter((data: ICard) => {
                return lowPrice < data.price && data.price < highPrice
                
            })
        case "colors":
            if (!valueFilter) return cardList
            return cardList.filter((data: ICard) => {
                return data.color.includes(valueFilter)
            })
        case "brand":
            if (!valueFilter) return cardList 
            return cardList.filter((data: ICard) => {
                return data.brand === valueFilter
            })
            
        default:
            return cardList
    }
}

export function sortingCardList(cardList: ICard[], sort: string| undefined){
    switch (sort) {
        case ("Recommended"):
            return [...cardList].sort(compareNew)
        case ("What's New"):    
            return [...cardList].sort(compareNew)
        case ("Price (High - Low)"):
            return [...cardList].sort(comparePriceHigh)
        case ("Price (Low - High)"):
            return [...cardList].sort(comparePriceLow)
        default:
            return [...cardList]
    }
}

// При добавление нового переключателя нужно только в visibleCardList добавить ключ и функцию фильтрации
// filterObj сами переключатели фильтров имеют вид пример {price: ["51-100.99", "201-250"], color: ["red"], brand: []}
export function filterCardsList(filterObj:IFilterCards, cardList: ICard[]){
    const initialState: initialStateFilter = createInitialState()

    // фильтрация по ||
    for (const key in filterObj){
        for (const item of filterObj[key]){
            if (initialState[key].length) initialState[key] = [...initialState[key] ,...visibleCardList(cardList, key, item)]
            else {
                initialState[key] = visibleCardList(cardList, key, item)
            }
        }
    }
    
    //убираю списки которые равны 0 и сортирую по длине, чтобы первый элемент по длине был самым маленьким
    let newlist = getNewList(initialState)
    
    if (newlist.length >= 1){
        // делаю слияние списков по самому маленькому списку
        return mergeList(newlist[0], newlist.slice(1,newlist.length))
    }
    else {
        return cardList
    }
}   
