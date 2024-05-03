
import { useState } from "react";
import {ReactComponent as Next} from "@/images/icon-next.svg"
import { SliderItem } from "@/widgets/sliderItem";
import { useGetCards } from "../../cardList/api/useGetCards";
import { useSetCarusel } from "../lib/useSetCarusel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { visibleCardList } from "@/features/cardList/model/card-list-slice";

export function Slider(){

    const {cardList} = useSelector((state: RootState)=> {
       return state.cardList
    })

    const filterCardList = visibleCardList(cardList, "new")
    
    const dispatch = useDispatch()

    const [currentCard, setCurrenCard] = useState(0)
    const [carusel, setCarusel] = useState(false)

    useGetCards(filterCardList, dispatch)
    
    useSetCarusel(filterCardList, carusel, setCarusel, handleClickRigth)

    function handleClickLeft(){
        setCurrenCard(prevCard => prevCard === 0 ? filterCardList.length-1: prevCard -1)
    
    }
    
    function handleClickRigth(){
        setCurrenCard(prevCard => prevCard+1 === filterCardList.length ? 0: prevCard  + 1)
    }


    return <div className="slider">
        <span className="slider-title">new arrival</span>
        <div className="slider-container">
            <div onClick={handleClickLeft} className="slider-item_left"><Next/></div>
            <div onClick={handleClickRigth} className="slider-item_rigth"><Next/></div>
            {filterCardList.length ? filterCardList.map((item, index) => {
                return <SliderItem key={index} item={item} index={index} currentCard={currentCard}/> 
            }) : null}
        </div>
    </div>
}


