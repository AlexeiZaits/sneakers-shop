import { useFocusEffect } from "@/shared/hooks/use-focus-effect"
import { useBack } from "../hook/use-back"

import { IChildren } from "@/shared/lib/interfaces"

export function GoBackOnBlur({children}: IChildren){
    const { handleBlur } = useBack()
    const [ref] = useFocusEffect(true)
    
    return <span style={{width: "100%", height: "100%"}} tabIndex={0} ref={ref} onBlur={handleBlur}>
        {children}
    </span>
}