import { useEffect, useRef } from "react"
import { toggleBasket } from "../model/basket-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";

export function Basket(){
    
    const basketRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const {basket, cards} = useSelector((state: RootState) => state.basket)


    useEffect(()=> {
        if (basketRef.current){
            basketRef.current.focus()
        }
    }, []);
    
    function handleBlur(){
        setTimeout(()=> {
            if(basket) {
            dispatch(toggleBasket(false))
            }
        }, 150)
    }
    
    // logic cards
    return <div ref={basketRef} tabIndex={0} onBlur={handleBlur} className="basket">
        <div className="basket-header">
            <h2 className="basket-title">Cart</h2>
        </div>
        
        <div className="basket-content">
            {cards.length ? null: <span className="basket-empty">Your cart is empty</span>}
        </div>
    </div>
}