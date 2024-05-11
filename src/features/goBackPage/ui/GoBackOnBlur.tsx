import { useBack } from "../hook/use-back"
import { useFocusEffect } from "@/shared/hooks/useFocusEffect"
import { IChildren } from "@/shared/lib/interfaces"

export function GoBackOnBlur({children}: IChildren){
    const {handleBlur, backRef} = useBack()
    useFocusEffect(backRef)
    
    return <span style={{width: "100%", height: "100%"}} tabIndex={0} ref={backRef} onBlur={handleBlur}>
        {children}
    </span>
}