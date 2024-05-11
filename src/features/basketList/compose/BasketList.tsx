import { BasketItem } from "@/entities/basketItem"
import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"
import { BasketCheckout } from "./BasketCheckout"

export function BasketList(){
    const {cartList} = useSelector((state: RootState) => state.cartList)
    
    return <div className="cart-list">
        {cartList.map((item)=> {
            return <BasketItem amount={item.amount} 
            id={item.id} image={item.image} 
            name={item.name} discountPrice={item.discountPrice} 
            finalyPrice={item.finalyPrice} key={item.id}/>
        })}
        {cartList.length ? <BasketCheckout/> : null}
    </div>
}