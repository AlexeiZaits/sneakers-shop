import { CartImg } from "@/shared/assets/images/icon-cart";
import avatar from "@/shared/assets/images/git-hub-img.png";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";
import { useCalcAmountGoods } from "@/features/basketList/hook/use-calc-amount-goods";
import styles from "./styles.module.scss"

export function HeaderBasket(){
    const {widjet, handleEvent} = useToggleWidjet("basket")
    const {amountGoods} = useCalcAmountGoods()
    
    return <div className={styles.box}>
        <div onClick={handleEvent} className={styles.cart}>
            <CartImg fill={widjet}/>
            {amountGoods ? <div className={styles.amount}>{amountGoods}</div> : null}
        </div>
        <a href="https://github.com/AlexeiZaits" target="blank">
            <img className={styles.avatar} src={avatar} alt="avatar" />
        </a> 
    </div>
}
