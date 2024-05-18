import { toggleWidjet } from "@/features/togglerWidjets/model/toggler-widjets-slice";
import { useAppDispatch, useAppSelector } from "./storeHooks";

export function useToggleWidjet(key: string){
    const dispatch = useAppDispatch()
    const togglerStorage = useAppSelector(state => state.togglerWidjets)

    function handleEvent(){
        dispatch(toggleWidjet({key: key}))
    }

    if (key in togglerStorage){
        const widjet = togglerStorage[key]
        return {widjet, handleEvent}
    }
    else {
        console.log(Error("wrong key widjet"))
        return {widjet: false, handleEvent: () => {}}
    }

       
}