import { keys } from "./filterList";
import { IFilterCards } from "./interface";

export function createInitialState(){
    const newObj:IFilterCards = {}
    for (const key of keys){
        newObj[key] = []
    }
    return newObj
}