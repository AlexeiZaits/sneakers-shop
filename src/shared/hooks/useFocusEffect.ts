import { useEffect } from "react"

export function useFocusEffect(ref: React.RefObject<HTMLDivElement>){
    useEffect(()=> {
        ref.current?.focus()
    }, [ref])
}