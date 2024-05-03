import { configureStore } from "@reduxjs/toolkit"
import { basketSlice } from "./widgets/basket/model/basket-slice"
import { sidebarSlice } from "./widgets/sidebar/model/sidebar-slice"
import { CardListSlice } from "./features/cardList/model/card-list-slice"
import { collectionItem } from "./pages/CollectionItem/model/collection-item-slice"
import { calcAmountSlice } from "./features/addToCart/model/calc-amount-lsice"
import { cartListSlice } from "./features/cartList/model/cart-list-slice"
import { filterCardsSlice } from "./features/filterCards/model/filter-cards-slice"




export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        sidebar: sidebarSlice.reducer,
        cardList: CardListSlice.reducer,
        collectionItem: collectionItem.reducer,
        calcAmount: calcAmountSlice.reducer,
        cartList: cartListSlice.reducer,
        filterCardsList: filterCardsSlice.reducer,
        
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch