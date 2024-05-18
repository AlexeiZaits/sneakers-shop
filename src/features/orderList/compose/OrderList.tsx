import { OrderItem } from "@/entities/orderItem"
import { useAppSelector } from "@/shared/hooks/storeHooks"
import { useDeleteGood } from "@/shared/hooks/use-delete-good"

export function OrderList(){
    const {cartList} = useAppSelector(state => state.cartList)
    const { handleClick } = useDeleteGood()
    
    return <div className="order">
        <span className="order-title">Your order</span>
        {cartList.length ? cartList.map(item => {
        return <OrderItem key={item.id} {...item} handleClick={handleClick} />
        }): null}
        <span className="order-total">Total: ${cartList.reduce((acc, item) => acc+item.finalyPrice, 0)}</span>
    </div>
}