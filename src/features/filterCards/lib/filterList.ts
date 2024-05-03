import { IFilterCards } from "./interface";

export const filterList :IFilterCards = {
    price: ["51-100.99", "101-150.99", "151-200.99", "201-250"],
    colors: ["white", "blue", "brown", "green", "black", "yellow", "red", "grey"],
    brand: ["adidas", "nike", "mizuno", "converse", "saucony", "asics", "new Balance", "salomon", "karhu","hoka"]
}

export const keys: (keyof typeof filterList)[] = Object.keys(filterList) as (keyof typeof filterList)[];