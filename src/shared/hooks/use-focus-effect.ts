import { useEffect, useRef } from "react"

export function useFocusEffect(view: boolean){
    const ref = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        ref.current?.focus()
    }, [ref, view])
    
    return [ref]
}