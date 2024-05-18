import { checkoutCart } from "@/features/basketList/model/cart-list-slice";
import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { useNavigate } from "react-router-dom";

export function useCheckoutNavigate(number:string, setCheck: (state: boolean) => void){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    function handleClick(){
        if(number.length === 12){
            navigate("/sneakers-shop")
            dispatch(checkoutCart())
            
        }else{
            setCheck(false)
        }
    }
    
    return {handleClick}
}