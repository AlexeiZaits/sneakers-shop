import { AddButton } from "../ui/AddButton";
import { CalcAmount } from "../ui/CalcAmount";
import styles from "./styles.module.scss";

export function AddToCart(){
    return <div className={styles.container}>
        <CalcAmount/>
        <AddButton/>
    </div>
}
