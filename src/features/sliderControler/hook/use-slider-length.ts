import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { setSliderLength } from "../model/slider-controler-slice";

export function useSliderLength(): [number, (length: number) => void]{
    const dispatch = useAppDispatch()
    const {sliderLength} = useAppSelector(state => state.sliderControler)
    
    const setLength = (length: number) => dispatch(setSliderLength(length))

    return [sliderLength, setLength]
}