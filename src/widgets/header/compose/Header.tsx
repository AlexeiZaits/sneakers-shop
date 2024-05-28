import { HeaderMenu } from "../ui/HeaderMenu";
import { HeaderBasket } from "../ui/HeaderBasket";
import styles from "./styles.module.scss";

export function Header(){
    
    return  <div className={styles.header}>
        <HeaderMenu/>
        <HeaderBasket/>
    </div>
}
