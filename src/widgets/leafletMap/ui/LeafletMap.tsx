import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./styles.module.scss"

export function LeafletMap(){
    return (
        <MapContainer center={[58.007755, 56.213261]} zoom={16} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[58.007755, 56.213261]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    );
}