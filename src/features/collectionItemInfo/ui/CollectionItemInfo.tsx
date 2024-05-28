import { IChildren } from "@/shared/lib/interfaces"
import { useGetCard } from "../hook/use-get-card"
import { getDiscountPrice } from "../lib/getDiscountPrice"
import { useCard } from "../hook/use-card"
import styles from "./styles.module.scss";

export function CollectionItemInfo({children}: IChildren){
    const [{data},] = useCard()
    useGetCard()
    
    return <>
    {data && <div className={styles.info}>
            <span className={styles.company}>SNEAKAERS COMPANY</span>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.descp}>{data.description}</span>
            {data.discount? <div className={styles.price}>
                <span className={styles.value}>${getDiscountPrice(data.price, data.discount)}.00</span>
                <span className={styles.discount}>{data.discount}%</span>
                <span className={styles.trough}>${data.price}.00</span>
            </div>
            : <span className={styles.value}>${data.price}</span>}
            {children}
    </div>}
    </>
}