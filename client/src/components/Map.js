import React from 'react'
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'

function Map() {
    return (
        <div>
            <MapContainer center={[33.6995, 73.0363]} zoom={13} className='h-screen'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </div>
    )
}

export default Map
