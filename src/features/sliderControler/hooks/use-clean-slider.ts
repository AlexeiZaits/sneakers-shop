import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { useEffect } from "react";
import { cleanSliderControler } from "../model/slider-controler-slice";

export function useCleanSlider(){
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        return () => {
            dispatch(cleanSliderControler())
        }
    }, [])
}