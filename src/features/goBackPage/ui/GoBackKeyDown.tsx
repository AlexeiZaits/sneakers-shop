import { IChildren } from "@/shared/lib/interfaces"
import { useBack } from "../hook/use-back"

export function GoBackKeyDown({children}: IChildren){
    const {handleKeyDown} = useBack()
    
    return <span onKeyDown={handleKeyDown}>
        {children}
    </span>
}