import { useState } from "react"
import { SliderLightBox } from "./SliderLightBox"
import { CurrentLightBox } from "./CurrentLightBox"
import { ListLightBox } from "./ListLIghtBox"



export function LightBox(){
    const [currentImg, setCurrentImg] = useState<number>(0)
    

    return <div className="box">
        <SliderLightBox currentImg={currentImg} setCurrentImg={setCurrentImg}/>
        <CurrentLightBox currentImg={currentImg} />
        <ListLightBox currentImg={currentImg} setCurrentImg={setCurrentImg}/>
    </div>
}