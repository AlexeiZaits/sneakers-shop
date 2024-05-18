import { ICard } from "./interfaces";

export function removeDuplicateById(list:ICard[]): ICard[]{
    if (list.length !== 0){
        const newList:ICard[] = []
        for (const item of list){
            let check = true;
            for (const itemNew of newList){
                if(itemNew.id === item.id){
                    check = false
                    break
                }
            }
            if (check) newList.push(item)
            
        }
        return newList
    }
    else return []
}