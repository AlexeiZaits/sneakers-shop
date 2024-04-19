import { Dispatch, useEffect } from "react";
import { ICard } from "./interfaces";

export function useSetCarusel(cards: ICard[], carusel:boolean, setCarusel:Dispatch<React.SetStateAction<boolean>>, handleClickRigth: ()=> void){
    useEffect(()=> {
        if(!carusel){
            setCarusel(true)
            
        }
    }, [carusel])

    useEffect(() => {
        if (carusel && cards.length) {
            const intervalId = setInterval(handleClickRigth, 5000);
            return () => clearInterval(intervalId);
        }
        
    }, [carusel, cards]);
}