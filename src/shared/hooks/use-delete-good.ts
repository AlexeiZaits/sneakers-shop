import { useAppDispatch } from "./storeHooks"
import { removeCart } from "@/features/basketList/model/cart-list-slice"

export function useDeleteGood(){
    const dispatch = useAppDispatch()
    
    function handleClick(id: number|string){
        dispatch(removeCart(id))
    }

    return {handleClick}
}