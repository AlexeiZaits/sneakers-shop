import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../lib/interfaces";
import { compareNew, comparePriceHigh, comparePriceLow } from "../lib/compare";
import { IFilterCards } from "@/features/filterCards/lib/interface";


interface ICardListSlice {
    cardList: ICard[],
    sort: string,
}

export const initialState: ICardListSlice = {
    cardList: [],
    sort: "Recomended",
    
}

export const CardListSlice = createSlice({
    name: "@cardList",
    initialState,
    reducers: {
        setCardList: (state, action) => {
            state.cardList = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        }
    }
})

export const { setCardList, setSort } = CardListSlice.actions;

export function visibleCardList(cardList: ICard[],  filter: string|undefined, valueFilter?: string){
    switch (filter) {
        case "new":
            return cardList.filter((data: ICard) => data.isNew === true)
        case "man":
            return cardList.filter((data: ICard)=> data.sex === "man")
        case "woman":
            return cardList.filter((data: ICard)=> data.sex === "woman")
        case "price":
            if (valueFilter){
            const lowPrice = +valueFilter.split("-")[0]
            const highPrice = +valueFilter.split("-")[1]
            return cardList.filter((data: ICard) => {
                return lowPrice < data.price && data.price < highPrice
                
            })}
            else return []
        case "colors":
            if (valueFilter)
            return cardList.filter((data: ICard) => {
                return data.color.includes(valueFilter)
            })
            else return []
            
        case "brand":
            return cardList.filter((data: ICard) => {
                return data.brand === valueFilter
                
        })
        default:
            return cardList
    }
}

export interface rangePrice {
    lowPrice: number,
    highPrice: number,
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


interface IFilterCardsList {
    [key: string] : ICard[]
}

export function filterCardsList(filterObj:IFilterCards, cardList: ICard[]){
    const initialState: IFilterCardsList = {
        price: [],
        colors: [],
        brand: [],
    }
    for (const key in filterObj){
        for (const item of filterObj[key]){
            if (initialState[key].length) initialState[key] = [...initialState[key] ,...visibleCardList(cardList, key, item)]
            else {
                initialState[key] = visibleCardList(cardList, key, item)
            }
        }
    }
    
    const {price, colors, brand} = initialState
    const newListColors:ICard[] = removeDuplicateById(colors)
    function removeDuplicateById(list:ICard[]): ICard[]{
        if (list.length !== 0){
            const newList:ICard[] = []
            for (const itemColor of list){
                let check = true;
                for (const item of newList){
                    if(item.id === itemColor.id){
                        check = false
                        break
                    }
                }
                if (check) newList.push(itemColor)
                
            }
            return newList
        }
        else return []
    }
    
    let newlist = [price, newListColors, brand]
    .filter((item) => item.length > 0)
    .sort((a, b) => {
        if (a.length > b.length){
            return 1
        }
        if (a.length < b.length){
            return -1
        }
        return 0
    })
    
    if (newlist.length >= 1){
        const newMergeList = mergeList(newlist[0], newlist.slice(1,newlist.length))
        return newMergeList
    }
    else {
        return cardList
    }


    function mergeList(mergeList:ICard[], otherElements: ICard[][]){
        return mergeList.filter((item) => {
            let somethingDone = true;
            for (let element of otherElements){
                if(!element.some((elementItem) => elementItem.id === item.id)){
                    somethingDone = false
                }
            }
            return somethingDone
        })
        

    }
}   