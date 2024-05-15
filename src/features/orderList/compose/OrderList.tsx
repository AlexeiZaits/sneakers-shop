import { OrderItem } from "@/entities/orderItem"
import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"

export function OrderList(){
    const {cartList} = useSelector((state: RootState) => state.cartList)
    
    return <div className="order">
        <span className="order-title">Your order</span>
        {cartList.length ? cartList.map(item => {
        return <OrderItem key={item.id} {...item} />
        }): null}
        <span className="order-total">Total: ${cartList.reduce((acc, item) => acc+item.finalyPrice, 0)}</span>
    </div>
}