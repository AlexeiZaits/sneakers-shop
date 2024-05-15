/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { setCurrentSlide } from "@/features/sliderControler/model/slider-controler-slice";

export function useSetCarusel(){
    const dispatch = useAppDispatch()
    const refCar = useRef(null)
    const { cardsSlider } = useAppSelector(state => state.sliderList)
    const { currentSlide } = useAppSelector(state => state.sliderControler)

    useEffect(() => {
        if (refCar && cardsSlider.length) {
            const refCar = setInterval(() => 
            dispatch(setCurrentSlide(currentSlide+1 === cardsSlider.length ? 0: currentSlide + 1))
            , 4000);
            return () => clearInterval(refCar);
        }
        
    }, [refCar, cardsSlider.length, currentSlide]);

    return {currentSlide}
}