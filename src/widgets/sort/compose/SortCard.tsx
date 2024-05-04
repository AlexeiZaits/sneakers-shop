import { useEffect, useRef, useState } from "react"
import { sortList } from "../lib/sortList"
import { useDispatch } from "react-redux"
import { setSort } from "@/features/cardList/model/card-list-slice"

export function SortCard(){
    const [choice, setChoice] = useState("Recommended")
    const [toggle, setToggle] = useState(false)
    const choiceList = useRef<HTMLDivElement>(null)
    
    const dispatch = useDispatch()

    function handleClick(item: string){
        setChoice(item)
        setToggle(false)
    }

    useEffect(()=>{
        if(toggle){
            choiceList.current?.focus()
        }
    }, [toggle])

    function handleBlur(){
        setTimeout(() => {
            if(toggle){
                setToggle(false)
            }
        }, 200);
    }
    
    useEffect(()=> {
        dispatch(setSort(choice))
    }, [choice, dispatch])

    return <div className="sort">
        <span onClick={() => setToggle(prevTogle => !prevTogle)} className="sort-chosen">Sort by: {choice}</span>
        {toggle ? <div ref={choiceList} onBlur={handleBlur} tabIndex={0} className="sort-choice">
            {sortList.map((item) => {
                return <span key={item} onClick={()=>handleClick(item)} className={`sort-choice_item ${choice === item? "sort-choice_active": ""}`}>{item}</span>
            })}
        </div>: null}
    </div>
}

