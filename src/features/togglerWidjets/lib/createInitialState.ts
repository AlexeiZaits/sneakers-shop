import { listWidjets } from "./listWidjets";

export interface INewInitialState {
    [key: string]: boolean;
}

export function createInitialState(){
    const newState: INewInitialState = {}
    
    listWidjets.forEach(element => {
        newState[element] = false
    });

    return newState
}