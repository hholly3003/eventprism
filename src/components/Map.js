import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import '../styles/Map.css';

function Map({location, zoomLevel}) {
  return (
    <div className='map'>
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCj3H556eF0bmg3bT-7SyA2789uKftM4T4' }}
                center={{lat:location.lat, lng:location.lng}}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
  )
}

export default Map