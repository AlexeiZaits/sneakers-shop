import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { setAmount } from "../model/calc-amount-slice"

export function useCalc(){
    const dispatch = useAppDispatch()
    const {amount} = useAppSelector(state =>  state.calcAmount)
    
    function handleClick(calc: number){
        if(amount+calc !== -1){
            dispatch(setAmount(calc))
        }
    }

    return {handleClick, amount}
}