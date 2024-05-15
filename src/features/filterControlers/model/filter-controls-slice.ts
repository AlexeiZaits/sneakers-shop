import { createSlice } from "@reduxjs/toolkit";

export const filterControlSlice = createSlice({
    name: "@filterControls",
    initialState: false,
    reducers: {
        toggleFilter: (state, _) => {
            return state = !state
        }
    }
})

export const { toggleFilter } = filterControlSlice.actions 