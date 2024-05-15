import { keysFilter } from "@/features/filterControlers/lib/filterList";
import { initialStateFilter } from "./interfaces";

export function createInitialState(){
    const newObj:initialStateFilter = {}
    for (const key of keysFilter){
        newObj[key] = []
    }
    return newObj
}   