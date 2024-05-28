import { Links, OrderList, SendOrder } from "@/features/index";
import { useNavigateMain } from "../hook/use-navigate-main";
import { Wrapper } from "@/shared/ui";

export function CheckoutOrder(){
    useNavigateMain()
    
    return <Wrapper>
        <Links />
        <OrderList/>
        <SendOrder/>
    </Wrapper>
}
