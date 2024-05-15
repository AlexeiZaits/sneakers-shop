import { AddButton } from "../ui/AddButton";
import { CalcAmount } from "../ui/CalcAmount";

export function AddToCart(){
    return <div className="add-to-cart">
        <CalcAmount/>
        <AddButton/>
    </div>
}
