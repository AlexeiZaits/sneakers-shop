import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"
import { setCurrentSlide } from "../model/slider-controler-slice"
import { ICard } from "@/features/cardList/lib/interfaces"

export function useSliderControler({currentList}:{currentList: ICard[]| string[]}){
    const dispatch = useAppDispatch()
    const {currentSlide} = useAppSelector(state => state.sliderControler)
    
    function handleClickLeft(){
        dispatch(setCurrentSlide(currentSlide ? currentList.length-1: currentSlide -1))
    }
    
    function handleClickRigth(){
        dispatch(setCurrentSlide(currentSlide + 1 === currentList.length ? 0: currentSlide + 1))
    }

    return {handleClickLeft, handleClickRigth}
}