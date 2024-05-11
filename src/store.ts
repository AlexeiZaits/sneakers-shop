import { configureStore } from "@reduxjs/toolkit"
import { basketSlice } from "./widgets/basket/model/basket-slice"
import { sidebarSlice } from "./widgets/sidebar/model/sidebar-slice"
import { CardListSlice } from "./features/cardList/model/card-list-slice"
import { collectionItem } from "./pages/CollectionItem/model/collection-item-slice"
import { calcAmountSlice } from "./features/addToCart/model/calc-amount-slice"
import { cartListSlice } from "./features/basketList/model/cart-list-slice"
import { filterCardsSlice } from "./widgets/filter/model/filter-cards-slice"
import { filterControlSlice } from "./features/filterControlers/model/filter-controls-slice"
import { sortSlice } from "./widgets/sort/model/sort-slice"

export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        sidebar: sidebarSlice.reducer,
        cardList: CardListSlice.reducer,
        collectionItem: collectionItem.reducer,
        calcAmount: calcAmountSlice.reducer,
        cartList: cartListSlice.reducer,
        filterCardsList: filterCardsSlice.reducer,
        filterControl: filterControlSlice.reducer,
        sortToggle: sortSlice.reducer,
        
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
// TODO: исправить везде dispatch
export type AppDispatch = typeof store.dispatch