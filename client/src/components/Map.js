import React, { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import geojsonData from '../geojson/PAK_adm4_reduced.json'

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

    const centerLocation = locations.length > 0 ? locations[locations.length - 1] : [33.6844, 73.0479]; // Default to Islamabad if no locations

    const pointInPolygon = (point, polygon) => {
        let x = point[1], y = point[0];
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            let xi = polygon[i][0], yi = polygon[i][1];
            let xj = polygon[j][0], yj = polygon[j][1];

            let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    };

    const getRegionStyle = (feature) => {
        const coordinates = feature.geometry.coordinates[0];
        const selected = locations.some(location =>
            pointInPolygon(location, coordinates)
        );

        return {
            color: selected ? 'red' : 'purple',
            weight: 2,
            fillColor: selected ? 'red' : 'blue',
            fillOpacity: 0.2
        };
    };

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
                <GeoJSON data={geojsonData} style={getRegionStyle} />
            </MapContainer>
        </div>
    );
}

export default Map;
