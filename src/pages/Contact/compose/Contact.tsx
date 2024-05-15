import { LeafletMap } from "@/widgets/leafletMap"
import { ContactInfo } from "../ui/contactInfo"
import { Links } from "@/features/index"

export function Contact(){
    
    return <div className="main">   
        <Links />
        <div className="contact">
            <LeafletMap/>
            <ContactInfo/>
        </div>
    </div>
}
