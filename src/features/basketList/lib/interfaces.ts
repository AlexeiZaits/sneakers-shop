import { ICard } from "@/features/cardList/lib/interfaces";

export interface ICartCard extends ICard{
    amount: number;
    finalyPrice: number;
    discountPrice: number;
    handleClick: (id: number|string) => void
}

export interface ICartSlice { 
    cartList: ICartCard[],
    amountGoods: number,
}
