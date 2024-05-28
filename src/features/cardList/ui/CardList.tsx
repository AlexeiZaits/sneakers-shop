import { ICard } from "../lib/interfaces"
import { GoodItem } from "@/entities/goodItem"
import { useSetCards } from "../hook/use-set-cards"
import { useGetFinallyCards } from "../hook/use-get-finally-cards"
import styles from "./styles.module.scss";

export function CardList(){
    useSetCards()
    const finallyCards =  useGetFinallyCards()
    
    return <div className={styles.list}>
        {finallyCards.length
        ? finallyCards.map((item: ICard) =>
        <GoodItem key={item.id}
        {...item}
        />)
        : null}
    </div>
}
