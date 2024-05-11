import { setCardList } from "@/features/cardList/model/card-list-slice";
import { apiGetCards } from "@/shared/api/apiGetCards";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/storeHooks";

import { useEffect } from "react";

export async function useGetCards(){
    const dispatch = useAppDispatch()
    const {cardList} = useAppSelector(state => state.cardList)
    

    useEffect(() => {
        if (cardList.length === 0) {
            apiGetCards("new", cardList)
            .then(data => {
                console.log(data)
                dispatch(setCardList(data.cards))
            })
            .catch((error) => {
                console.log(error)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}