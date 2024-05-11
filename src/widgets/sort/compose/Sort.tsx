import { useEffect, useRef, useState } from "react"
import { sortList } from "../lib/sortList"
import { useDispatch, useSelector } from "react-redux"
import { setSort } from "@/features/cardList/model/card-list-slice"

import { RootState } from "@/store.ts"
import { toggleState } from "../model/sort-slice"
import { handleBlur } from "@/shared/lib/handleBlur"
import { useFocusEffect } from "@/shared/hooks/useFocusEffect"

export function Sort(){
    const dispatch = useDispatch()
    //TODO: 3.choice должен быть в model в зависимости от него будет меняться карточки
    const [choice, setChoice] = useState("Recommended")
    const sortView = useSelector((state: RootState) => state.sortToggle)
    const choiceRef = useRef<HTMLDivElement>(null)
    

    function handleClick(item: string){
        setChoice(item)
        dispatch(toggleState(false)) 
    }
    
    useFocusEffect(choiceRef)
    
    //TODO: 4. после 3 убрать
    useEffect(()=> {
        dispatch(setSort(choice))
    }, [choice, dispatch])

    //TODO: 2.придумать toggler общий
    //TODO: 1.переместить model в feat
    return <div className="sort">
        <span onClick={() => dispatch(toggleState(!sortView))} className="sort-chosen">Sort by: {choice}</span>
        {sortView ? <div ref={choiceRef} onBlur={()=>handleBlur(sortView, toggleState, dispatch)} tabIndex={0} className="sort-choice">
            {sortList.map((item) => {
                return <span key={item} onClick={()=>handleClick(item)} className={`sort-choice_item ${choice === item? "sort-choice_active": ""}`}>{item}</span>
            })}
        </div>: null}
    </div>
}

