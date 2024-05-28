import { ICard } from "@/features/cardList/lib/interfaces";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function GoodItem({id, name, isNew, image, price}:Omit<ICard, 'sex' | 'discount' | 'display'|"color"|"brand">){
    
    return <Link to={`${id}`} className={styles.card}>
        {isNew && <span className={styles.new}>new</span> }
        <div className={styles.container}>
            <img className={styles.img} src={image} alt="cross"/>
        </div>
        <div className={styles.info}>
            <span>{name}</span>
            <span>{price}$</span>
        </div>
    </Link>
}