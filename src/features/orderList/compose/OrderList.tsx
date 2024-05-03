import { OrderItem } from "@/entities/orderItem"
import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"

export function OrderList(){
    const {cartList} = useSelector((state: RootState) => state.cartList)
    
    return <div className="order">
        <span className="order-title">Your order</span>
        {cartList.length ? cartList.map(item => {
            return <OrderItem key={item.id} amount={item.amount} 
            id={item.id} image={item.image} discount={item.discount}
            name={item.name} finalyPrice={item.finalyPrice} price={item.price} />
        }): null}
        <span className="order-total">Total: ${cartList.reduce((acc, item) => acc+item.finalyPrice, 0)}</span>
    </div>
}