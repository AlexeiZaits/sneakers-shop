/* eslint-disable react-hooks/exhaustive-deps */
import { apiGetCards } from "@/shared/api/apiGetCards";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";
import { useEffect } from "react";
import { setCardsSlider } from "../model/sliderListSlice";
import { cleanSliderControler, setListLength } from "@/features/sliderControler/model/slider-controler-slice";

export function useGetCards(){
    const dispatch = useAppDispatch()
    const { cardsSlider }  = useAppSelector(state => state.sliderList)
    
    useEffect(() => {
        if (cardsSlider.length === 0) {
            apiGetCards("new")
            .then(data => {
                dispatch(setCardsSlider(data.cards))
            })
            .catch((error) => {
                console.log(error)
            })
        }
        return () => {
            dispatch(cleanSliderControler())
        }
        
    }, [])

    useEffect(() => {
        dispatch(setListLength(cardsSlider.length))
    }, [cardsSlider])

    return { cardsSlider }
}