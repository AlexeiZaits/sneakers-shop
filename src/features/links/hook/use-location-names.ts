import { useLocation } from "react-router-dom"

export function useLocationNames(){
    const {pathname} = useLocation()

    const links = pathname
    .split("/")
    .filter(item => {
        return item !== ""
    });
    
    return {links}
}