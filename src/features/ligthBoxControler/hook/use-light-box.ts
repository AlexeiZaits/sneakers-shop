import { setCurrentSlide } from "@/features/sliderControler/model/slider-controler-slice"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks"

export function useLightBox(){
    const {data, imgs} = useAppSelector(state  => state.collectionItem)
    const {currentSlide} = useAppSelector(state => state.sliderControler)
    const dispatch = useAppDispatch()

    function handleClick(index: number){
        dispatch(setCurrentSlide(index))
    }

    return {data, imgs, currentSlide, handleClick}
}