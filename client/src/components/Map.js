import React from 'react'
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

function Map() {
    const icon = new Icon({
        iconUrl:'https://cdn-icons-png.flaticon.com/128/447/447031.png',
        iconSize: [40, 40]
    })
    return (
        <div>
            <MapContainer center={[33.6995, 73.0363]} zoom={13} className='h-screen'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                <Marker position={[33.6995, 73.0363]} icon={icon}/>
            </MapContainer>
        </div>
    )
}

export default Map
