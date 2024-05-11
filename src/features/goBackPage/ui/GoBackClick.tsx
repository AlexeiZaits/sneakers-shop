import { IChildren } from "@/shared/lib/interfaces"
import { useBack } from "../hook/use-back"


export function GoBackClick({children}: IChildren){
    const {handleClick} = useBack()
    
    return <span onClick={handleClick}> 
        {children}
    </span>
}