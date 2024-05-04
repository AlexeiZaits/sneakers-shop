import { useEffect } from "react"

export function useFocusEffect(state: boolean, stateRef: React.RefObject<HTMLDivElement>){
    useEffect(()=> {
        if (state) stateRef.current?.focus()
    }, [state, stateRef])
}