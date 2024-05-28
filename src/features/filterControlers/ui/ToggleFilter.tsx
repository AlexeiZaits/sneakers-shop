import classNames from "classnames";
import { useFilterItem } from "../hook/use-filter-item"
import styles from "./styles.module.scss";

interface IFilterItem{
    item: string,
    keyItem: number|string,
}

export function ToggleFilterItem({item, keyItem}:IFilterItem){
    const {handleClick, filterCardsList} = useFilterItem()
    
    return <span key={item} onClick={() => handleClick(keyItem, item)}
            className={classNames(
                styles.value,
                { [styles.active]: filterCardsList[keyItem].includes(item) }
            )}>
            {keyItem === "colors"? <span className={styles.colors} style={{"background" : `${item}`}}></span>: ""}
            {item}
            {keyItem === "price"? "$": ""}
    </span>
}