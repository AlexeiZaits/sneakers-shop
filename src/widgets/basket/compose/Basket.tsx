import { toggleBasket } from "../model/basket-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { BasketList } from "@/features/basketList";
import { useFocusEffect } from "@/shared/hooks/use-focus-effect";


export function Basket(){
    const dispatch = useDispatch()
    const [ref] = useFocusEffect()
    const {basket} = useSelector((state: RootState) => state.basket)
    const {cartList} = useSelector((state: RootState) => state.cartList)
    
    function handleBlur(){
        dispatch(toggleBasket(!basket))
    }

    //TODO: model должен быть в фиче
    return <div ref={ref} tabIndex={0} onBlur={()=>handleBlur} className="basket">
        <div className="basket-header">
            <h2 className="basket-title">Cart</h2>
        </div>
        <div className="basket-content">
            {cartList.length ? <BasketList/>: <span className="basket-empty">Your cart is empty</span>}
        </div>
    </div>
}