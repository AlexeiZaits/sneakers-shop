import { useState } from "react"
import { SliderLightBox } from "@/features/ligthBox/compose/SliderLightBox"
import { CurrentLightBox } from "@/features/ligthBox/compose/CurrentLightBox"
import { ListLightBox } from "@/features/ligthBox/compose/ListLIghtBox"

export function LightBox(){
    const [currentImg, setCurrentImg] = useState<number>(0)
    
    return <div className="box">
        <SliderLightBox currentImg={currentImg} setCurrentImg={setCurrentImg}/>
        <CurrentLightBox currentImg={currentImg} />
        <ListLightBox currentImg={currentImg} setCurrentImg={setCurrentImg}/>
    </div>
}