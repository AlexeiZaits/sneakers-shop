import { ICard } from "@/features/cardList/lib/interfaces"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { addGood } from "../model/cart-list-slice"
import { getDiscountPrice } from "../lib/getDiscountPrice"

export function useAddGood(){
    const dispatch = useAppDispatch()
    const cartList = useAppSelector(state => state.cartList)

    function handleClick(good:Omit<ICard, "color" | "brand">, amount: number){
        amount && dispatch(addGood({...good, 
            amount: amount, 
            discountPrice: getDiscountPrice(good.price, good.discount),
            finalyPrice: getDiscountPrice(good.price, good.discount)*amount
        }))
    }
    
    return {cartList, handleClick}
}