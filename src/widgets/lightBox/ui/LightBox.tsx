import { CurrentLightBox, ListLightBox, SliderControler } from "@/features/index"

export function LightBox(){
    
    return <div className="box">
        <SliderControler className="box-slider"/>
        <CurrentLightBox />
        <ListLightBox />
    </div>
}