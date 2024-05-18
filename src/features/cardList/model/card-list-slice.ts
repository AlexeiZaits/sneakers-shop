import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard, initialStateFilter } from "../lib/interfaces";
import { compareNew, comparePriceHigh, comparePriceLow } from "../lib/compare";
import { IFilterCards } from "@/features/filterControlers/lib/interface";
import { mergeList } from "../lib/mergeList";
import { createInitialState } from "../lib/createInitialState";
import { getNewList } from "../lib/getNewLIst";
import { filteredByOr } from "../lib/filteredByOr";

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


export function filterCardsList(filterSwitches:IFilterCards, cardList: ICard[]){
    const initialState: initialStateFilter = createInitialState()
    const filteredInitialState =  filteredByOr(filterSwitches, initialState, cardList)
    let newlist = getNewList(filteredInitialState)
    
    return newlist.length >=1 ? mergeList(newlist[0], newlist.slice(1,newlist.length)) : cardList
    
}   
