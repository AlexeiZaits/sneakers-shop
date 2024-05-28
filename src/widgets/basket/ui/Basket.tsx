import { BasketList } from "@/features/basketList";
import { useAppSelector } from "@/shared/hooks/storeHooks";
import { useFocusEffect } from "@/shared/hooks/use-focus-effect";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";
import styles from "./styles.module.scss";

export function Basket(){
    const {cartList} = useAppSelector(state => state.cartList)
    const {widjet} = useToggleWidjet("basket")
    const [ref] = useFocusEffect(widjet)
    //TODO: придумать решение onBlur={() => handleEvent()}
    return <>
    {widjet && <div ref={ref} tabIndex={0} className={styles.basket}>
        <div className={styles.header}>
            <h2 className={styles.title}>Cart</h2>
        </div>
        <div className={styles.content}>
            {cartList.length ? <BasketList/>: <span className={styles.empty}>Your cart is empty</span>}
        </div>
    </div>}
    </>
}