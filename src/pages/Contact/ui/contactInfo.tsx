import { contactList } from "../lib/contact-list";

export function ContactInfo(){
    return <div className="contact-info">
        <span className="contact-info_title">Our contact data</span>
        <div className="contact-info_social">
            <a  href={contactList.geoLoc} target="_blank" rel="noopener noreferrer"><span className="contact-info_link">We are located at Perm, Krisanova, 12a</span></a>
            <a href={"tel:"+contactList.number}><span className="contact-info_link">Call the number {contactList.number}</span></a>
            <a  href={contactList.vk} target="_blank" rel="noopener noreferrer"><span className="contact-info_link">Our social network VK</span></a>
            <a href={contactList.telegram} target="_blank" rel="noopener noreferrer"><span className="contact-info_link">Our social network Telegram</span></a>
        </div>
    </div>
}