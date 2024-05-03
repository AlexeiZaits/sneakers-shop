import { addCart } from "@/features/cartList/model/cart-list-slice"
import {  CartImg } from "@/images/icon-cart"
import { RootState } from "@/store.ts"
import { setAmount } from "@/widgets/basket/model/basket-slice"
import { useDispatch, useSelector } from "react-redux"
import { getDiscountPrice } from "../lib/getDiscountPrice"


export function AddButton(){
    const {data}  = useSelector((state: RootState) => state.collectionItem)
    const {amount}  = useSelector((state: RootState) => state.calcAmount)
    const dispatch = useDispatch()
    
    function handleClick(){
        if(amount) { 
        dispatch(addCart({...data, amount: amount, discountPrice: getDiscountPrice(data.price, data.discount), finalyPrice: getDiscountPrice(data.price, data.discount)*amount}))
        dispatch(setAmount(amount))}
    }
          
    return <div onClick={handleClick} className="add-button">
        <CartImg fill={"white"}/>
        <span className="add-button_text">Add to cart</span>
    </div>
}

