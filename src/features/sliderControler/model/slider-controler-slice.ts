import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    currentSlide: number 
}

export const initialState:IInitialState = {
    currentSlide: 0
}

export const sliderControlerSlice = createSlice({
    name: "@sliderControler",
    initialState,
    reducers: {
        setCurrentSlide: (state, action) => {
            state += action.payload
        }
        cleanInitialState: () => initialState
    }
})