import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { setCurrentSlide } from "../model/slider-controler-slice";

export function useSlide(): [number, (slide: number) => void]{
    const dispatch = useAppDispatch()
    const {currentSlide} = useAppSelector(state => state.sliderControler)

    const setSlide = (slide: number) => dispatch(setCurrentSlide(slide))
    
    return [currentSlide, setSlide]
}