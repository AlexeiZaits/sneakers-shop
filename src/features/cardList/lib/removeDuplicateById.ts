import { ICard } from "./interfaces";

export function removeDuplicateById(list:ICard[]): ICard[]{
    if (list.length !== 0){
        const newList:ICard[] = []
        for (const itemColor of list){
            let check = true;
            for (const item of newList){
                if(item.id === itemColor.id){
                    check = false
                    break
                }
            }
            if (check) newList.push(itemColor)
            
        }
        return newList
    }
    else return []
}