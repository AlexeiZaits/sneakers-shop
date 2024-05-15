import { SliderControler } from "@/features/sliderControler";
import { SliderList } from "@/features/sliderList";
import { useAppSelector } from "@/shared/hooks/storeHooks";

export function Slider(){
    const {cardList} = useAppSelector(state => state.cardList)
    
    return <div className="slider">
        <span className="slider-title">new arrival</span>
        <div className="slider-container">
            <SliderControler currentList={cardList} />
            <SliderList/>
        </div>
    </div>
}


