import { useAppSelector } from "@/shared/hooks/storeHooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function useNavigateMain(){
    const { cartList } = useAppSelector(state =>  state.cartList)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (cartList.length === 0){
            navigate("/sneakers-shop")
        }
    }, [cartList, navigate])
}