import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { setCurrentSlide } from "../model/slider-controler-slice"

export function useSliderControler(){
    const dispatch = useAppDispatch()
    const {currentSlide, listLength} = useAppSelector(state => state.sliderControler)

    function handleClickLeft(){
        listLength !== 0 && dispatch(setCurrentSlide(currentSlide ? listLength-1: currentSlide -1))
    }
    
    function handleClickRigth(){
        listLength !== 0 && dispatch(setCurrentSlide(currentSlide + 1 === listLength ? 0: currentSlide + 1))
    }

    return {handleClickLeft, handleClickRigth}
}