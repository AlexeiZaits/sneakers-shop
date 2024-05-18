import { ReactComponent as Next } from "@/app/images/icon-next.svg"
import { useSliderControler } from "../hooks/use-slider-controler"

interface ISliderControler{
    className?: string
}

export function SliderControler({className}:ISliderControler){
    const {handleClickLeft, handleClickRigth} = useSliderControler()
    
    return <div className={className ?  className :`slider-controler`}>
        <div onClick={handleClickLeft} className= {className ?  className+"_left" :`slider-controler_left`}><Next/></div>
        <div onClick={handleClickRigth} className= {className ?  className+"_right" :`slider-controler_right`}><Next/></div>
    </div>
}