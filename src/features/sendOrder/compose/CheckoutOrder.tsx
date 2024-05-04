import { checkoutCart } from "@/features/basketList/model/cart-list-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ISendOrder } from "../lib/interfaces";
import { resetAmount } from "@/widgets/basket/model/basket-slice";

export function CheckoutOrder({number, setCheck}:Omit<ISendOrder,  "check" | "setNumber">){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleClick(){
        if(number.length === 12){
            navigate("/sneakers-shop")
            dispatch(checkoutCart(null))
            dispatch(resetAmount(null))
            
        }else{
            setCheck(false)
        }
    }
    
    return <button  className="send-checkout" onClick={handleClick}>Checkout</button>
}