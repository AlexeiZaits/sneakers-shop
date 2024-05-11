import { ICard } from "@/features/cardList/lib/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface ICollectionitem{
    data: Omit<ICard, "color"| "brand">, 
    imgs: string[],
    
}

const initialState:ICollectionitem = {
    data: {
        description: "",
        discount: 0,
        display: null,
        id: 0,
        image: "",
        isNew: false,
        name: "",
        price: 0,
        sex: "man"
    },
    imgs: [],
    

}

export const collectionItem = createSlice({ 
    name: "@collectionItem",
    initialState,
    reducers: {
        setCard: (_, action) => {
            return action.payload
        },
        resetCard: () => initialState
    }
    
})

export const { setCard, resetCard} = collectionItem.actions
