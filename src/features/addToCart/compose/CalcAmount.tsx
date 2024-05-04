import { ReactComponent as Minus } from "@/images/icon-minus.svg"
import { ReactComponent as Plus } from "@/images/icon-plus.svg"
import { useDispatch, useSelector } from "react-redux"
import { setAmount } from "../model/calc-amount-slice"
import { RootState } from "@/store.ts"

export function CalcAmount(){
    const dispatch = useDispatch()
    const {amount} = useSelector((state: RootState) =>  state.calcAmount)
    
    function handleClick(calc: number){
        if(amount+calc !== -1){
            dispatch(setAmount(calc))
        }
    }

    return <div className="calc">
        <span onClick={()=> handleClick(-1)} className="calc-icon"><Minus/></span>
        <span>{amount}</span>
        <span onClick={()=> handleClick(1)} className="calc-icon"><Plus/></span>
    </div>
}