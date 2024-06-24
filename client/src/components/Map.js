import React, { useEffect } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

function Map({ location }) {
    const icon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/447/447031.png',
        iconSize: [40, 40]
    })

    function ChangeView({ center }) {
        const map = useMap();
        useEffect(() => {
            map.flyTo(center, map.getZoom(), { animate: true, duration: 1.5 });
        }, [center]);
        return null;
    }

    return (
        <div>
            <MapContainer center={[location[0], location[1]]} zoom={16} className='h-screen'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <ChangeView center={[location[0], location[1]]} />
                <Marker position={[location[0], location[1]]} icon={icon} />
            </MapContainer>
        </div>
    )
}

export default Map