import { Links, OrderList, SendOrder } from "@/features/index";
import { useNavigateMain } from "../hook/use-navigate-main";

export function CheckoutOrder(){
    useNavigateMain()
    
    return <div className="main">
        <Links />
        <OrderList/>
        <SendOrder/>
    </div>
}
