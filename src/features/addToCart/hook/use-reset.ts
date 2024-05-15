/* eslint-disable react-hooks/exhaustive-deps */
import { useAppDispatch } from "@/shared/hooks/storeHooks"
import { useEffect } from "react"
import { resetAmount } from "../model/calc-amount-slice"

export function useReset(){
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        return () => {
            dispatch(resetAmount(null))
        }
    }, [])
}