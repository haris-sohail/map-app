import React, { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function Map({ locations }) {
    const icon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/447/447031.png',
        iconSize: [40, 40]
    });

    function ChangeView({ center }) {
        const map = useMap();
        useEffect(() => {
            map.flyTo(center, map.getZoom(), { animate: true, duration: 1.5 });
        }, [center]);
        return null;
    }

    // Use the last location to center the map
    const centerLocation = locations[locations.length - 1];

    return (
        <div>
            <MapContainer center={[centerLocation[0], centerLocation[1]]} zoom={8} className='h-screen'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <ChangeView center={[centerLocation[0], centerLocation[1]]} />
                {locations.map((location, index) => (
                    <Marker key={index} position={[location[0], location[1]]} icon={icon} />
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;