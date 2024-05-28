import { createSlice } from "@reduxjs/toolkit";
import { ICartSlice } from "../lib/interfaces";

export const initialState: ICartSlice ={
    cartList: [],
    amountGoods: 0,
}

export const cartListSlice = createSlice({
    name: "@cartList",
    initialState,
    reducers: {
        addGood: (state, action) => {
            const findGood = state.cartList.find((item) => item.id === action.payload.id)
            if (findGood){
                findGood.amount = findGood.amount + action.payload.amount
                findGood.finalyPrice = findGood.discountPrice * findGood.amount
            }else{
                state.cartList.push(action.payload)
            }
        },
        removeCart: (state, action)=> {
            state.cartList = state.cartList.filter((item) => item.id !== action.payload)
        },
        calcAmountGoods: (state, _) => {
            state.amountGoods = state.cartList.reduce((acc, item) => acc + item.amount, 0)
        },
        checkoutCart: () => initialState,
        
    }
})

export const {addGood, removeCart, calcAmountGoods, checkoutCart} = cartListSlice.actions;

