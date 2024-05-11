import { SliderControler } from "@/features/sliderControler";
import { SliderList } from "@/features/sliderList";

export function Slider(){
    return <div className="slider">
        <span className="slider-title">new arrival</span>
        <div className="slider-container">
            {/* TODO: доделать SliderControler */}
            <SliderControler currentList={filterCardList} setCurrentState={setCurrenCard}/>
            <SliderList/>
        </div>
    </div>
}


