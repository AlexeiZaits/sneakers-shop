import { ReactComponent as Minus } from "@/images/icon-minus.svg"
import { ReactComponent as Plus } from "@/images/icon-plus.svg"
import { useCalc } from "../hook/use-calc"
import { useReset } from "../hook/use-reset"

export function CalcAmount(){
    const {amount, handleClick} = useCalc()
    useReset()

    return <div className="calc">
        <span onClick={() => handleClick(-1)} className="calc-icon"><Minus/></span>
        <span>{amount}</span>
        <span onClick={() => handleClick(1)} className="calc-icon"><Plus/></span>
    </div>
}