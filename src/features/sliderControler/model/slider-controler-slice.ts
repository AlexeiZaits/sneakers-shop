import { createSlice } from "@reduxjs/toolkit";

interface ISliderControler{
    currentSlide: number,
    sliderLength: number
}

export const initialState:ISliderControler = {
    currentSlide: 0,
    sliderLength: 0,
}

export const sliderControlerSlice = createSlice({
    name: "@sliderControler",
    initialState,
    reducers: {
        setCurrentSlide: (state, action) => {
            state.currentSlide = action.payload
        },
        setSliderLength: (state, action) => {
            state.sliderLength = action.payload
        },
        cleanSliderControler: () => initialState
    }
})

export const { setCurrentSlide, setSliderLength, cleanSliderControler } = sliderControlerSlice.actions