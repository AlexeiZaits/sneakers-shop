import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: "@basket",
    initialState: {
        basket: false,
        cards: [],
        amount: 0,
    },
    reducers: {
        toggleBasket: (state, action) => {
            state.basket = action.payload
            
        },
    }
})

export const { toggleBasket } = basketSlice.actions