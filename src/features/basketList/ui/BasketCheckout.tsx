import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet"
import { Button } from "@/shared/ui/button"
import { Link } from "react-router-dom"

export function BasketCheckout(){
    const {handleEvent} = useToggleWidjet("basket")
    
    return <Link onClick={handleEvent} to={"/sneakers-shop/checkout-order"} className="add-button basket-checkout">
        <Button>Checkout</Button>
    </Link>
}