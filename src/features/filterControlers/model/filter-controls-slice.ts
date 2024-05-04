import { createSlice } from "@reduxjs/toolkit";

export const filterControlSlice = createSlice({
    name: "@filterControls",
    initialState: false,
    reducers: {
        toggleFilter: (state, action) => {
            return state = action.payload
        }
    }
})

export const { toggleFilter } = filterControlSlice.actions 