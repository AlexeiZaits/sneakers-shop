import { Dispatch, useEffect } from "react"

import { ICard } from "../lib/interfaces"
import { setCardList } from "../model/card-list-slice"
import { UnknownAction } from "@reduxjs/toolkit"
import { apiGetCards } from "src/routes/api/apiGetCards"



export function useGetCards(cards:ICard[], dispatch: Dispatch<UnknownAction>){
    useEffect(() => {
        if (!cards.length) {
        apiGetCards()
        .then(data => {
            dispatch(setCardList(data))
        })
        .catch(error => {
            console.log(error)
        })
    }
    }, [cards, dispatch])
}

//data.filter((data: ICard) => data.new === true))