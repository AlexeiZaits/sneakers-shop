import { ICard } from "@/features/cardList/lib/interfaces";
import { createSlice } from "@reduxjs/toolkit";


export interface ICartCard extends ICard{
    amount: number;
    finalyPrice: number;
    discountPrice: number;
}

export interface ICartSlice{
    cartList: ICartCard[]
}

export const initialState: ICartSlice ={
    cartList: []
}

export const cartListSlice = createSlice({
    name: "@cartList",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const findGood = state.cartList.find((item) => item.id === action.payload.id)
            if (findGood){
                findGood.amount = findGood.amount + action.payload.amount
                findGood.finalyPrice = findGood.discountPrice * findGood.amount
            }else{
                state.cartList.push(action.payload)
            }
        },
        removeCart: (state, action)=> {
            console.log(action.payload)
            state.cartList = state.cartList.filter((item) => item.id !== action.payload)
        },
        checkoutCart: (state, _) => {
            state.cartList = []
        }   
        
    }
})

export const {addCart, removeCart, checkoutCart} = cartListSlice.actions;

