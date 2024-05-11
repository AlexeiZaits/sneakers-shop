import { ICard } from "@/features/cardList/lib/interfaces"
import {ReactComponent as Next} from "@/images/icon-next.svg"

interface ISliderControler{
    setCurrentState: (value: React.SetStateAction<number>) => void,
    currentList: ICard[] | string[],
    className?: string
}   

export function SliderControler({setCurrentState, currentList, className}:ISliderControler){
    
    function handleClickLeft(){
        setCurrentState(prevCard => prevCard === 0 ? currentList.length-1: prevCard -1)
    }
    
    function handleClickRigth(){
        setCurrentState(prevCard => prevCard+1 === currentList.length ? 0: prevCard  + 1)
    }

    return <div className={className ?  className :`slider-controler`}>
        <div onClick={handleClickLeft} className= {className ?  className+"_left" :`slider-controler_left`}><Next/></div>
        <div onClick={handleClickRigth} className= {className ?  className+"_right" :`slider-controler_right`}><Next/></div>
    </div>
}