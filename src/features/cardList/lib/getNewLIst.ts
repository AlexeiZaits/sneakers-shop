import { keysFilter } from "@/features/filterControlers/lib/filterList"
import { initialStateFilter } from "./interfaces"
import { removeDuplicateById } from "./removeDuplicateById"

export function getNewList(initialState: initialStateFilter){
    return keysFilter
    .map((key) => removeDuplicateById(initialState[key]))
    .filter((item) => item.length > 0)
    .sort((a, b) => {
        if (a.length > b.length){
            return 1
        }
        if (a.length < b.length){
            return -1
        }
        return 0
    })
}