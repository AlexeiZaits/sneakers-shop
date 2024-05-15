import { ICard } from "@/features/cardList/lib/interfaces";
import { visibleCardList } from "@/features/cardList/model/card-list-slice";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    cardsSlider : ICard[]
}

export const initialState:IInitialState = {
    cardsSlider : []
}

export const sliderListSlice = createSlice({
    name: "sliderListSlice",
    initialState,
    reducers: {
        setCardsSlider: (state, action: PayloadAction<ICard[]>) => {
            state.cardsSlider = visibleCardList(action.payload, "new")
        }
    }
})

export const { setCardsSlider } = sliderListSlice.actions