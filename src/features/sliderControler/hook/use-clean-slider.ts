import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { cleanSliderControler } from "../model/slider-controler-slice";

export function useCleanSlider(){
    const dispatch = useAppDispatch()
    
    const cleanSlider = () => dispatch(cleanSliderControler())

    return cleanSlider 
}