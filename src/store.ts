import { configureStore } from "@reduxjs/toolkit"
import { CardListSlice } from "./features/cardList/model/card-list-slice"
import { calcAmountSlice } from "./features/addToCart/model/calc-amount-slice"
import { cartListSlice } from "./features/basketList/model/cart-list-slice"
import { filterCardsSlice } from "./features/filterControlers/model/filter-cards-slice"
import { filterControlSlice } from "./features/filterControlers/model/filter-controls-slice"
import { sliderControlerSlice } from "./features/sliderControler/model/slider-controler-slice"
import { sortControlerSlice } from "./features/sortList/model/sortListSlice"
import { sliderListSlice } from "./features/sliderList/model/sliderListSlice"
import { togglerWidjetsSlice } from "./features/togglerWidjets/model/toggler-widjets-slice"
import { collectionItemSlice } from "./features/collectionItemInfo/model/collection-item-slice"

export const store = configureStore({
    reducer: {
        cardList: CardListSlice.reducer,
        collectionItem: collectionItemSlice.reducer,
        calcAmount: calcAmountSlice.reducer,
        cartList: cartListSlice.reducer,
        filterCardsList: filterCardsSlice.reducer,
        filterControl: filterControlSlice.reducer,
        sliderControler: sliderControlerSlice.reducer,
        sortContoler: sortControlerSlice.reducer,
        sliderList: sliderListSlice.reducer,
        togglerWidjets: togglerWidjetsSlice.reducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch