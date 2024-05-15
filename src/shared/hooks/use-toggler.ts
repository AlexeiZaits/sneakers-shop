import { useState } from "react";

export function useToggler(){
    const [view, setView] = useState(false)
    
    function handleEvent(){
        setView((prevView) => !prevView)
    }

    return {view, handleEvent}

}