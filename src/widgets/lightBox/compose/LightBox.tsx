import { useState } from "react"
import { CurrentLightBox, ListLightBox, SliderControler } from "@/features/index"
import { useAppSelector } from "@/shared/hooks/storeHooks"

export function LightBox(){
    const [currentImg, setCurrentImg] = useState<number>(0)
    const {imgs} = useAppSelector(state => state.collectionItem)
    //TODO: SliderControler
    return <div className="box">
        <SliderControler currentList={imgs} setCurrentState={setCurrentImg} className="box-slider"/>
        <CurrentLightBox currentImg={currentImg} />
        <ListLightBox currentImg={currentImg} setCurrentImg={setCurrentImg}/>
    </div>
}