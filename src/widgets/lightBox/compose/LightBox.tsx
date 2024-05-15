import { CurrentLightBox, ListLightBox, SliderControler } from "@/features/index"
import { useAppSelector } from "@/shared/hooks/storeHooks"

export function LightBox(){
    //TODO: должно быть в model
    const {imgs} = useAppSelector(state => state.collectionItem)
    //TODO: SliderControler
    return <div className="box">
        <SliderControler currentList={imgs} className="box-slider"/>
        <CurrentLightBox />
        <ListLightBox />
    </div>
}