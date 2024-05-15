import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { toggleBasket } from "@/widgets/basket/model/basket-slice"
import { toggleSidebar } from "@/widgets/sidebar/model/sidebar-slice"

export function useHeader(){
    const dispatch = useAppDispatch()
    const {basket, amount} = useAppSelector(state => state.basket)
    
    function handleClickBasket(){
        dispatch(toggleBasket(true))
    }

    function handleClickSidebar(){
        document.documentElement.style.overflow = 'hidden';
        dispatch(toggleSidebar(null))
    }

    return {basket, amount, handleClickBasket, handleClickSidebar}
}