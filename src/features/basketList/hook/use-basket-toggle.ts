import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { toggleBasket } from "@/widgets/basket/model/basket-slice";

export function useBasketToggle(){
    const dispatch = useAppDispatch()

    function handleClick(){
        dispatch(toggleBasket(false))
    }
    
    return {handleClick}
}