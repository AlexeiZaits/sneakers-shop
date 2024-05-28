import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { useEffect } from "react";
import { calcAmountGoods } from "../model/cart-list-slice";

export function useCalcAmountGoods(){
    const dispatch = useAppDispatch()
    const { cartList, amountGoods } = useAppSelector(state => state.cartList)
    
    useEffect(() => {
        dispatch(calcAmountGoods(null))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartList])
    
    return {amountGoods}
}