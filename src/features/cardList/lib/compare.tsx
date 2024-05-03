import { ICard } from "./interfaces";

export function compareNew(a:ICard, b:ICard) {
    if (a.isNew === true && b.isNew !== true) {
      return -1;
    }
    if (a.isNew !== true && b.isNew === true) {
      return 1;
    }
    return 0;
}

export function comparePriceHigh(a:ICard, b:ICard){
    if (a.price > b.price){
        return -1
    }
    if (a.price < b.price){
        return 1
    }
    return 0
}

export function comparePriceLow(a:ICard, b:ICard){
    if (a.price < b.price){
        return -1
    }
    if (a.price > b.price){
        return 1
    }
    return 0
}