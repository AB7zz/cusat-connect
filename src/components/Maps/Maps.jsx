import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Navbar from '../Home/Navbar/Navbar'
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

const Maps = (props) => {
  return (
    <>
      <Navbar/>
      <Map
          google={props.google}
          zoom={15}
          initialCenter={{
            lat: 123,
            lng: 123,
            
          }}
          >
          <Marker
            position={{
              lat: 123,
              lng: 123,
            }}
          />
          <Marker
            position={{
              lat: 42,
              lng: 65,
            }}
            icon={{
              url: 'src/components/Compass/boat.png',
              scaledSize: new google.maps.Size(64,64)
            }}
          />
        </Map>
      <BottomNav/>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmN-pywUQGw-Lpn-uSKm0bo4YCNeGzYLU&v=weekly&channel=2&libraries=places',
})(Maps);