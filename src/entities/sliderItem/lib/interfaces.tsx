import { ICard } from "@/features/cardList/lib/interfaces";

export interface ISliderItem{
    index: number;
    currentCard: number;
    item : ICard;
}