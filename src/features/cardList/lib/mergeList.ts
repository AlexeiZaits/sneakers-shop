import { ICard } from "./interfaces";

export function mergeList(mergeList:ICard[], otherElements: ICard[][]){
    return mergeList.filter((item) => {
        let somethingDone = true;
        for (let element of otherElements){
            if(!element.some((elementItem) => elementItem.id === item.id)){
                somethingDone = false
            }
        }
        return somethingDone
    })
    

}