import { createSlice } from "@reduxjs/toolkit";

interface ICalcAmountSlice{
    amount: number
}

const initialState: ICalcAmountSlice = {
    amount: 0
}

export const calcAmountSlice = createSlice({
    name: "@addToCart/amount",
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount  = state.amount + action.payload
        },
        resetAmount: (state, _) => {
            state.amount = 0;
        }
    }
})

export const { setAmount, resetAmount } = calcAmountSlice.actions
