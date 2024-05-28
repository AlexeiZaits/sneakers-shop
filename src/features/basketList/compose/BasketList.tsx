import { BasketItem } from "@/entities/basketItem"
import { BasketCheckout } from "../ui/BasketCheckout"
import { useAppSelector } from "@/shared/hooks/storeHooks"
import { useDeleteGood } from "@/shared/hooks/use-delete-good"
import styles from "./styles.module.scss";

export function BasketList(){
    const { cartList } = useAppSelector(state => state.cartList)
    const { handleClick } = useDeleteGood()
    
    return <div className={styles.list}>
        {cartList.map((item)=> {
            return <BasketItem key={item.id} {...item} handleClick={handleClick}/>
        })}
        {cartList.length ? <BasketCheckout/> : null}
    </div>
}