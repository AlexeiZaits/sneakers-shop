import { AddButton } from "./AddButton";
import { CalcAmount } from "./CalcAmount";

export function AddToCart(){
    return <div className="add-to-cart">
        <CalcAmount/>
        <AddButton/>
    </div>
}
