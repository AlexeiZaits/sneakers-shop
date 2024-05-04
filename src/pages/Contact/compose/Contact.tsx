import { LeafletMap } from "@/widgets/leafletMap"
import { Links } from "@/shared/index"
import { useLocation } from "react-router-dom"
import { ContactInfo } from "../ui/contactInfo"

export function Contact(){
    const location = useLocation()
    
    return <div className="main">   
        <Links pathname={location.pathname}/>
        <div className="contact">
            <LeafletMap/>
            <ContactInfo/>
        </div>
    </div>
}
