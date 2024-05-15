import { createSlice } from "@reduxjs/toolkit";
import { sortList } from "../lib/sortList";

interface IInitialState {
    currentSort: string 
}

export const initialState:IInitialState = {
    currentSort: sortList[0]
}

export const sortControlerSlice = createSlice({
    name: "@sortControler",
    initialState,
    reducers: {
        setCurrentSort: (state, action) => {
            state.currentSort =  action.payload
        },
        cleanCurrentSort: () => initialState
    }
})

export const { setCurrentSort, cleanCurrentSort } = sortControlerSlice.actions