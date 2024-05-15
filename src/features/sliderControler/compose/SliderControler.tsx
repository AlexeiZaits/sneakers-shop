import { ICard } from "@/features/cardList/lib/interfaces"
import { ReactComponent as Next } from "@/images/icon-next.svg"
import { useSliderControler } from "../hooks/use-slider-controler"

interface ISliderControler{
    currentList: ICard[] | string[],
    className?: string
}

export function SliderControler({currentList, className}:ISliderControler){
    const {handleClickLeft, handleClickRigth} = useSliderControler({currentList})

    return <div className={className ?  className :`slider-controler`}>
        <div onClick={handleClickLeft} className= {className ?  className+"_left" :`slider-controler_left`}><Next/></div>
        <div onClick={handleClickRigth} className= {className ?  className+"_right" :`slider-controler_right`}><Next/></div>
    </div>
}