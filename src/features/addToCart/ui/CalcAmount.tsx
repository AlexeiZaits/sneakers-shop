import { ReactComponent as Minus } from "@/shared/assets/images/icon-minus.svg"
import { ReactComponent as Plus } from "@/shared/assets/images/icon-plus.svg"
import { useCalc } from "../hook/use-calc"
import { useReset } from "../hook/use-reset"
import styles from "./styles.module.scss";

export function CalcAmount(){
    const [amount, handleClick] = useCalc()
    useReset()
    
    return <div className={styles.calc}>
        <span onClick={() => handleClick(-1)} className={styles.icon}><Minus/></span>
        <span>{amount}</span>
        <span onClick={() => handleClick(1)} className={styles.icon}><Plus/></span>
    </div>
}