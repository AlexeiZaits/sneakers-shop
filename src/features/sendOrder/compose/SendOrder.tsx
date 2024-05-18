import { useState } from "react"
import { FillNumber } from "../ui/FillNumber"
import { Button } from "@/shared/index"
import { useCheckoutNavigate } from "../hook/use-checkout-navigate"

export function SendOrder(){
    const [number, setNumber] = useState("+7")
    const [check, setCheck] = useState(true)
    const {handleClick} = useCheckoutNavigate(number, setCheck)

    return <div className="send">
        <FillNumber check={check} setNumber={setNumber} number={number}/>
        <Button onClick={handleClick}>Checkout</Button>
    </div>
}