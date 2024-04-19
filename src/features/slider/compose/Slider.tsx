
import { useState } from "react";
import {ReactComponent as Next} from "@/images/icon-next.svg"
import { SliderItem } from "@/widgets/sliderItem";
import { ICard } from "../lib/interfaces";
import { useGetCards } from "../api/useGetCards";
import { useSetCarusel } from "../lib/useSetCarusel";



export function Slider(){

    const [cards, setCards] = useState<ICard[]>([])
    const [currentCard, setCurrenCard] = useState(0)
    const [carusel, setCarusel] = useState(false)

    useGetCards(cards, setCards)
    
    useSetCarusel(cards, carusel, setCarusel, handleClickRigth)

    function handleClickLeft(){
        setCurrenCard(prevCard => prevCard === 0 ? cards.length-1: prevCard -1)
    
    }
    
    function handleClickRigth(){
        setCurrenCard(prevCard => prevCard+1 === cards.length ? 0: prevCard  + 1)
    }


    return <div className="slider">
        <span className="slider-title">new arrival</span>
        <div className="slider-container">
        <div onClick={handleClickLeft} className="slider-item_left"><Next/></div>
        <div onClick={handleClickRigth} className="slider-item_rigth"><Next/></div>
        {cards.length ? cards.map((item, index) => {
             return <SliderItem item={item} index={index} currentCard={currentCard}/> 
        }) : null}
        </div>
    </div>
}


