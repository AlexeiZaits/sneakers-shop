import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { setAmount } from "../model/calc-amount-slice"

export function useCalc(): [number, (calc: number) => void]{
    const dispatch = useAppDispatch()
    const {amount} = useAppSelector(state =>  state.calcAmount)
    
    const intstallAmount = (calc: number) => {amount+calc !== -1 && dispatch(setAmount(calc))}

    return [amount, intstallAmount]
}