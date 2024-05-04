import { keysFilter } from "./filterList";
import { IFilterCards } from "./interface";

export function createInitialState(){
    const newObj:IFilterCards = {}
    for (const key of keysFilter){
        newObj[key] = []
    }
    return newObj
}