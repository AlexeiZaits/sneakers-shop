import { BasketList } from "@/features/basketList";
import { useAppSelector } from "@/shared/hooks/storeHooks";
import { useFocusEffect } from "@/shared/hooks/use-focus-effect";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";

export function Basket(){
    const {cartList} = useAppSelector(state => state.cartList)
    const {widjet} = useToggleWidjet("basket")
    const [ref] = useFocusEffect(widjet)
    //TODO: придумать решение onBlur={() => handleEvent()}
    return <>
    {widjet && <div ref={ref} tabIndex={0} className="basket">
        <div className="basket-header">
            <h2 className="basket-title">Cart</h2>
        </div>
        <div className="basket-content">
            {cartList.length ? <BasketList/>: <span className="basket-empty">Your cart is empty</span>}
        </div>
    </div>}
    </>
}