import { setCurrentSlide } from "@/features/sliderControler/model/slider-controler-slice"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"

export function useLightBox(){
    const dispatch = useAppDispatch()
    const {data, imgs} = useAppSelector(state  => state.collectionItem)
    const {currentSlide} = useAppSelector(state => state.sliderControler)
    
    function handleClick(index: number){
        dispatch(setCurrentSlide(index))
    }

    return {data, imgs, currentSlide, handleClick}
}