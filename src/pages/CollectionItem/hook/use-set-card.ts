import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCard, setCard } from "../model/collection-item-slice";
import { useLoaderData } from "react-router-dom";
import { ICard } from "@/features/cardList/lib/interfaces";

export function useSetCard(){
    const dispatch = useDispatch()
    const { card } = useLoaderData() as { card: {data: ICard, imgs: string[]} }
    
    useEffect(()=> {
        dispatch(setCard(card))

        return function cleanup(){
            dispatch(resetCard())
        }
    }, [card, dispatch])

    return card
}