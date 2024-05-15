import { addCart } from "@/features/basketList/model/cart-list-slice"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { setAmount } from "../model/calc-amount-slice"
import { getDiscountPrice } from "../lib/getDiscountPrice"

export function useAddCart(){
    const dispatch = useAppDispatch()
    const {data}  = useAppSelector(state => state.collectionItem)
    const {amount}  = useAppSelector(state => state.calcAmount)
    
    function handleClick(){
        if(amount) { 
        dispatch(addCart({...data, amount: amount, discountPrice: getDiscountPrice(data.price, data.discount), finalyPrice: getDiscountPrice(data.price, data.discount)*amount}))
        dispatch(setAmount(amount))}
    }
    
    return {handleClick}
}