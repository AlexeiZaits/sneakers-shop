import { Button } from "@/shared/ui/button"
import { Link } from "react-router-dom"
import { useBasketToggle } from "../hook/use-basket-toggle"

export function BasketCheckout(){
    const {handleClick} = useBasketToggle()
    
    return <Link to={"/sneakers-shop/checkout-order"} className="add-button basket-checkout">
        <Button onClick={handleClick}>Checkout</Button>
    </Link>
}