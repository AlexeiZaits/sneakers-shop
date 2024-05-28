import { useAddGood } from "@/features/basketList/hook/use-add-good"
import {  CartImg } from "@/shared/assets/images/icon-cart"
import { useCalc } from "../hook/use-calc"
import { useCard } from "@/features/collectionItemInfo/hook/use-card"
import { Button } from "@/shared/index";
import styles from "./styles.module.scss";

export function AddButton(){
    const {handleClick} = useAddGood()
    const [amount] = useCalc()
    const [{data}] = useCard()
    
    return <Button onClick={() => handleClick(data, amount)}>
        <CartImg fill={"white"}/>
        <span className={styles.text}>Add to cart</span>
    </Button>
}

