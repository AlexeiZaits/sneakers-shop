import { createSlice } from "@reduxjs/toolkit";
import { IFilterCards } from "../lib/interface";
import { createInitialState } from "../lib/createInitialState";

export const initialState: IFilterCards = createInitialState()

export const filterCardsSlice = createSlice({
    name: "@filterCards",
    initialState,
    reducers: {
        setValue: (state, action)=> {
            state[action.payload.key].push(action.payload.value)
        },
        removeValue: (state, action) => {
            state[action.payload.key] = state[action.payload.key].filter((item) => item !== action.payload.value)
        },
        clearFilters: (state, _) => {
            return state = createInitialState()
        },
        
    }
})

export const {setValue, removeValue, clearFilters} = filterCardsSlice.actions
