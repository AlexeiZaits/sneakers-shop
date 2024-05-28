import { Link } from "react-router-dom";
import { ISliderItem } from "../lib/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export function SliderItem({index, item, currentCard}: ISliderItem){
    //TODO: исправить стили
    return <Link to={`collections/${item.id}`} className={classNames(styles.slider, {
        [styles.active]: index === currentCard,
        [styles.prev]: index > currentCard,
        [styles.next]: index < currentCard,
    })}>
        <img className={styles.img} src={item.image} alt="" />
        <div className={styles.info}>
            <span className={styles.title}>{item.name}</span>
            <span className={styles.description}>{item.description}</span>
            <span className={styles.price}>${item.price}</span>
        </div> 
    </Link>
}