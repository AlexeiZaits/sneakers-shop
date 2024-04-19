import { Dispatch, useEffect } from "react"
import { apiGetCards } from "src/api/apiGetCards"
import { ICard } from "../lib/interfaces"



export function useGetCards(cards:ICard[], setCards:Dispatch<React.SetStateAction<ICard[]>> ){
    useEffect(() => {
        if (!cards.length) {
        apiGetCards()
        .then(data => {
            setCards(data.filter((data: ICard) => data.new === true))
            
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    }, [cards])
}
