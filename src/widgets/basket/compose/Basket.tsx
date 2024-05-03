import { useEffect, useRef } from "react"
import { toggleBasket } from "../model/basket-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { CartList } from "@/features/cartList";
import { Link } from "react-router-dom";

export function Basket(){
    
    const basketRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const {basket} = useSelector((state: RootState) => state.basket)
    const {cartList} = useSelector((state: RootState) => state.cartList)

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
    
    return <div ref={basketRef} tabIndex={0} onBlur={handleBlur} className="basket">
        <div className="basket-header">
            <h2 className="basket-title">Cart</h2>
        </div>
        
        <div className="basket-content">
            {cartList.length ? <CartList/>: <span className="basket-empty">Your cart is empty</span>}
        </div>
        {cartList.length ? <Link to={"/sneakers-shop/checkout-order"} className="add-button basket-checkout">
            <span onClick={() => dispatch(toggleBasket(false))}>Checkout</span>
        </Link> : null}
    </div>
}