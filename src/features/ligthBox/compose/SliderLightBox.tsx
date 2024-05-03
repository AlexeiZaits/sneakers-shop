import { ReactComponent as IconNext } from "@/images/icon-next.svg";
import { ILightBox } from "../lib/inteface";

export function SliderLightBox({currentImg, setCurrentImg}:ILightBox){

    function handleClick(step:number){
        if (currentImg+step === 4){
            setCurrentImg(0)
        } else if (currentImg+step === -1){
            setCurrentImg(3)
        } else {
            setCurrentImg(prevState => {
                return prevState+step
            })
        }
    }

    return <div className="box-slider">
        <div onClick={()=>handleClick(-1)} className="box-slider_prev"><IconNext/></div>
        <div onClick={()=>handleClick(1)} className="box-slider_next"><IconNext/></div>
    </div>
}