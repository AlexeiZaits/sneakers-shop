import { ReactComponent as IconNext } from "@/images/icon-next.svg";
import { ILightBox } from "../lib/inteface";
import { useSelector } from "react-redux";
import { RootState } from "@/store.ts";

export function SliderLightBox({currentImg, setCurrentImg}:ILightBox){
    const {imgs} = useSelector((state: RootState) => state.collectionItem)

    function handleClick(step:number){
        if (currentImg+step === imgs.length){
            setCurrentImg(0)
        } else if (currentImg+step === -1){
            setCurrentImg(imgs.length-1)
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