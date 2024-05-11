import { ICard } from "@/features/cardList/lib/interfaces"
import { setCardList } from "@/features/cardList/model/card-list-slice"
import { useAppDispatch } from "@/shared/hooks/storeHooks"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

export function useSetCards(){
    const dispatch = useAppDispatch()
    const { cards } = useLoaderData() as { cards: ICard[] }
    
    useEffect(() => {
        if (cards) dispatch(setCardList(cards))
    }, [cards, dispatch])
}
