import { ICartCard } from "@/features/basketList/lib/interfaces";
import { IconDelete } from "@/shared/assets/images/icon-delete";
import styles from "./stlyes.module.scss";
import classNames from "classnames";

export function OrderItem({id, image, name, amount, finalyPrice,discount, price, handleClick}:Pick<ICartCard, "id" | "image" | "name" | "amount" | "finalyPrice"|"price"| "discount" | "handleClick">){

    return <div className={styles.order}>
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img className={styles.img} src={image} alt="" />
            </div>  
            <div className={styles.flex}>
                <span style={{marginLeft: "1rem"}} className={styles.name}>Name</span>
                <span className="order-value">{name}</span>
            </div>
        </div>
        <div className={styles.container}>
            <div style={{marginLeft: "1.4rem"}} className={styles.flex}>
                <span className={styles.name}>Amount</span>
                <span className={classNames(styles.amount, styles.value)}>{amount}</span>
            </div>
            <div className={styles.flex}>
                <span className={styles.name}>Price</span>
                <span className={styles.value}>${finalyPrice}
                    {discount? <span className={styles.through}>${price*amount}</span>: null}
                </span>
            </div>
        </div>
        <div onClick={() => handleClick(id)} className={styles.delete}><IconDelete className={styles.svg}/> </div>
    </div>
}