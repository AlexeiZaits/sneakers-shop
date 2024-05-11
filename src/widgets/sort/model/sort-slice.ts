import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
    name: "@sortToggle",
    initialState: false,
    reducers: {
        toggleState: (state, action) => {
            return state = action.payload
        }
    }
})

export const { toggleState } = sortSlice.actions