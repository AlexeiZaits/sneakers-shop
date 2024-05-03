import { OrderList, SendOrder } from "@/features/index";
import { Links } from "@/shared/index";
import { RootState } from "@/store.ts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export function CheckoutOrder(){
    const location = useLocation()
    const { cartList } = useSelector((state: RootState) =>  state.cartList)
    const navigate = useNavigate()

    useEffect(() => {
        if (cartList.length === 0){
            navigate("/sneakers-shop")
        }
    }, [cartList, navigate])

    return <div className="main">
        <Links pathname={location.pathname}/>
        <OrderList/>
        <SendOrder/>
    </div>
}
