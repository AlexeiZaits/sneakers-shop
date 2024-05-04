import { ICard } from "@/features/cardList/lib/interfaces";

export interface ICartCard extends ICard{
    amount: number;
    finalyPrice: number;
    discountPrice: number;
}

export interface ICartSlice{
    cartList: ICartCard[]
}
