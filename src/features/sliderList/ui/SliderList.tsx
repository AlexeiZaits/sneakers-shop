import { SliderItem } from "@/entities/sliderItem";
import { useSetCarusel } from "../hooks/use-set-carusel";
import { useGetCards } from "../hooks/use-get-cards";

export function SliderList(){   
    const { cardsSlider } = useGetCards()
    const { currentSlide } = useSetCarusel()
    
    return <>
            {cardsSlider.length ? cardsSlider.map((item, index) => {
                return <SliderItem key={item.id} item={item} index={index} currentCard={currentSlide}/> 
            }) : null}
        </>
}


