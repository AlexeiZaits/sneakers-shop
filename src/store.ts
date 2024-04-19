import { configureStore } from "@reduxjs/toolkit"
import { basketSlice } from "./widgets/basket/model/basket-slice"
import { sidebarSlice } from "./widgets/sidebar/model/sidebar-slice"



export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        sidebar: sidebarSlice.reducer,
        
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch