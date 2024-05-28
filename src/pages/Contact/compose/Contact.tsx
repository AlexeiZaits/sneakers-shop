import { LeafletMap } from "@/widgets/leafletMap"
import { ContactInfo } from "../ui/contactInfo"
import { Links } from "@/features/index"
import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss";

export function Contact(){
    
    return <Wrapper>
        <Links />
        <div className={styles.contact}>
            <LeafletMap/>
            <ContactInfo/>
        </div>
    </Wrapper>
}
