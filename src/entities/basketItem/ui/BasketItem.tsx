import { ICartCard } from "@/features/basketList/lib/interfaces";
import { IconDelete } from "@/shared/assets/images/icon-delete";
import styles from "./styles.module.scss";

export function BasketItem({amount,id,image,name,discountPrice,finalyPrice, handleClick}:Pick<ICartCard,"amount"| "id"| "image" | "name" | "discountPrice" | "finalyPrice" | "handleClick">){
    
    return <div className={styles.cart}>
        <div className={styles.container}>
            <img className={styles.img} src={image} alt="" />
        </div>
        <div className={styles.info}>
            <span>{name}</span>
            <span className={styles.price}>${discountPrice} x {amount} <span className={styles.fullprice}>${finalyPrice}</span></span>
        </div>
        <div onClick={() => handleClick(id)} className={styles.delete}><IconDelete className={styles.svg}/></div>
    </div>
}