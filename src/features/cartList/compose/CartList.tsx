import { CartItem } from "@/entities/cartItem"
import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"

export function CartList(){
    const {cartList} = useSelector((state: RootState) => state.cartList)
    
    return <div className="cart-list">
        {cartList.map((item)=> {
            return <CartItem amount={item.amount} 
            id={item.id} image={item.image} 
            name={item.name} discountPrice={item.discountPrice} 
            finalyPrice={item.finalyPrice} key={item.id}/>
        })}
        
    </div>
}