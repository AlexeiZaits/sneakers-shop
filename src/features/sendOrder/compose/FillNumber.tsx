import { ChangeEvent } from "react"
import { checkRussianNumber } from "../lib/checkRussianNumber"
import { ISendOrder } from "../lib/interfaces"

export function FillNumber({setNumber, check, number}:Omit<ISendOrder,  "setCheck">){

    function handleChange(event:ChangeEvent<HTMLInputElement>){
        if(checkRussianNumber(event.currentTarget.value)){
            setNumber(event.currentTarget.value)
        }
    }

    return <div className="send-container">
    <span className="send-text">Fill in your phone number:</span>
    <input className="send-input" onChange={handleChange} type="tel" name=""  value={number}/>
    {check? null: <span className="send-check">Check your number!</span>}
</div>
}