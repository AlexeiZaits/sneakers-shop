import { toggleBasket } from "@/widgets/basket/model/basket-slice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

export function BasketCheckout(){
    const dispatch = useDispatch()
    
    return <Link to={"/sneakers-shop/checkout-order"} className="add-button basket-checkout">
    <span onClick={() => dispatch(toggleBasket(false))}>Checkout</span>
    </Link>
}