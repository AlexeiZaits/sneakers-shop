import { RootState } from "@/store.ts"
import { useDispatch, useSelector } from "react-redux"
import { useGetCards } from "../api/useGetCards"
import { ICard } from "../lib/interfaces"
import { GoodItem } from "@/entities/goodItem"
import { filterCardsList, sortingCardList, visibleCardList } from "../model/card-list-slice"


interface ICardList{
    filter?: string,

}   

export function CardList({filter}: ICardList){
    const { cardList, sort } = useSelector((state: RootState) => state.cardList)
    const filterObj = useSelector((state: RootState) => state.filterCardsList)
    const dispatch = useDispatch()
    
    const filterCardList = filterCardsList(filterObj, cardList)
    const sortedCardList = sortingCardList(filterCardList, sort)
    const finalyCardList = visibleCardList(sortedCardList, filter)

    useGetCards(cardList, dispatch)

    return <div className="card-list">
        {finalyCardList.length
        ? finalyCardList.map((item: ICard) =>
        <GoodItem key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price} 
        image={item.image}
        isNew={item.isNew}
        />)
        : null}
    </div>
}