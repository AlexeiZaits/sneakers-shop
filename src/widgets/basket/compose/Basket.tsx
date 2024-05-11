import { useRef } from "react"
import { toggleBasket } from "../model/basket-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { BasketList } from "@/features/basketList";
import { handleBlur } from "@/shared/lib/handleBlur";
import { useFocusEffect } from "@/shared/hooks/useFocusEffect";

export function Basket(){
    const dispatch = useDispatch()
    const basketRef = useRef<HTMLDivElement>(null)
    const {basket} = useSelector((state: RootState) => state.basket)
    const {cartList} = useSelector((state: RootState) => state.cartList)
    
    useFocusEffect(basketRef)
    //TODO: model должен быть в фиче
    return <div ref={basketRef} tabIndex={0} onBlur={()=>handleBlur(basket, toggleBasket, dispatch)} className="basket">
        <div className="basket-header">
            <h2 className="basket-title">Cart</h2>
        </div>
        <div className="basket-content">
            {cartList.length ? <BasketList/>: <span className="basket-empty">Your cart is empty</span>}
        </div>
    </div>
}