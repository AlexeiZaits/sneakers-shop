import { useEffect, useRef } from "react"

export function useFocusEffect(){
    const ref = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        ref.current?.focus()
    }, [ref])
    
    return [ref]
}