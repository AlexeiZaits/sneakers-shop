import { ChangeEvent } from "react"
import { checkRussianNumber } from "../lib/checkRussianNumber"
import { ISendOrder } from "../lib/interfaces"
import styles from "./styles.module.scss";

export function FillNumber({setNumber, check, number}:Omit<ISendOrder,  "setCheck">){
    
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        if(checkRussianNumber(event.currentTarget.value)){
            setNumber(event.currentTarget.value)
        }
    }
    
    return <div className={styles.container}>
    <span className={styles.text}>Fill in your phone number:</span>
    <input className={styles.input} onChange={handleChange} type="tel" name=""  value={number}/>
    {check? null: <span className={styles.check}>Check your number!</span>}
</div>
}