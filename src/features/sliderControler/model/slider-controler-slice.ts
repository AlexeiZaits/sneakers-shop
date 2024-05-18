import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    currentSlide: number,
    listLength: number
}

export const initialState:IInitialState = {
    currentSlide: 0,
    listLength: 0,
}

export const sliderControlerSlice = createSlice({
    name: "@sliderControler",
    initialState,
    reducers: {
        setCurrentSlide: (state, action) => {
            state.currentSlide = action.payload
        },
        setListLength: (state, action) => {
            state.listLength = action.payload
        },
        cleanSliderControler: () => initialState
    }
})

export const { setCurrentSlide, setListLength, cleanSliderControler } = sliderControlerSlice.actions