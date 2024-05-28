import { useSlide } from "./use-slider"
import { useSliderLength } from "./use-slider-length"

export function useSliderControler(){
    const [length, ] = useSliderLength()
    const [currentSlide, setSlide] = useSlide()

    function handleClickLeft(){
        length !== 0 && setSlide(currentSlide-1 === -1 ? length-1: currentSlide -1)
    }
    
    function handleClickRigth(){
        length !== 0 && setSlide(currentSlide + 1 === length ? 0: currentSlide + 1)
    }

    return {handleClickLeft, handleClickRigth}
}