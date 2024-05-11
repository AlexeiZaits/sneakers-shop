import { Dispatch, useEffect } from "react";
import { ICard } from "../../cardList/lib/interfaces";

export function useSetCarusel(cards: ICard[], carusel:boolean, setCarusel:Dispatch<React.SetStateAction<boolean>>, setState: (value: React.SetStateAction<number>) => void){
    useEffect(()=> {
        if(!carusel){
            setCarusel(true)
            
        }
    }, [carusel, setCarusel])
    
    useEffect(() => {
        if (carusel && cards.length) {
            const intervalId = setInterval(() => setState(prevCard => prevCard+1 === cards.length ? 0: prevCard  + 1), 5000);
            return () => clearInterval(intervalId);
        }
        
    }, [carusel, cards, setState]);
}