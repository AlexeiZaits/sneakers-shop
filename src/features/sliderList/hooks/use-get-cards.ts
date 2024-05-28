/* eslint-disable react-hooks/exhaustive-deps */
import { apiGetCards } from "@/shared/api/apiGetCards";
import { useEffect } from "react";
import { useSliderLength } from "@/features/sliderControler/hook/use-slider-length";
import { useCleanSlider } from "@/features/sliderControler/hook/use-clean-slider";
import { useSliderList } from "./use-slider-list";

export function useGetCards(){
    const [cardsSlider, setCards] = useSliderList()
    const [, setLength] = useSliderLength()
    const cleanSlider = useCleanSlider()
    
    useEffect(() => {
        if (cardsSlider.length === 0) {
            apiGetCards("new")
            .then(data => {
                setCards(data.cards)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        return () => {
            cleanSlider()
        }
        
    }, [cardsSlider])

    useEffect(() => {
        setLength(cardsSlider.length)
    }, [cardsSlider])

    return { cardsSlider }
}