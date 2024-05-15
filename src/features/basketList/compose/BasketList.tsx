import { BasketItem } from "@/entities/basketItem"
import { BasketCheckout } from "./BasketCheckout"
import { useAppSelector } from "@/shared/hooks/storeHooks"

export function BasketList(){
    const {cartList} = useAppSelector(state => state.cartList)
    //TODO: в засимости от страницы рендерить разные карточки
    return <div className="cart-list">
        {cartList.map((item)=> {
            return <BasketItem key={item.id} {...item}/>
        })}
        {cartList.length ? <BasketCheckout/> : null}
    </div>
}