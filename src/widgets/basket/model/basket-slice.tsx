import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "@basket",
    initialState: {
        basket: false,
        amount: 0,
    },
    reducers: {
        toggleBasket: (state, action) => {
            state.basket = action.payload
        },
        setAmount: (state, action) => {
            state.amount = state.amount  + action.payload
        },
        decreaseAmount: (state, action) => {
            state.amount = state.amount - action.payload
        },
        resetAmount: (state, _) => {
            state.amount = 0;
        }
    }
})

export const { toggleBasket, setAmount, decreaseAmount, resetAmount } = basketSlice.actions