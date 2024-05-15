import { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

export function useBack(){
    const navigate = useNavigate();

    function handleClick(){
        navigate(-1)
    }
    
    function handleKeyDown(e:KeyboardEvent<HTMLDivElement>){
        e.code === "Escape" && navigate(-1)
    }

    function handleBlur(){
        navigate(-1)
    }
    
    return {handleClick, handleKeyDown, handleBlur}
}