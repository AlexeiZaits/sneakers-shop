import { useState } from "react"
import { FillNumber } from "./FillNumber"
import { CheckoutOrder } from "./CheckoutOrder"

export function SendOrder(){
    const [number, setNumber] = useState("+7")
    const [check, setCheck] = useState(true)
    
    return <div className="send">
        <FillNumber check={check} setNumber={setNumber} number={number}/>
        <CheckoutOrder number={number} setCheck={setCheck}/>
    </div>
}