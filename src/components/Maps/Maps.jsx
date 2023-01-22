import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Navbar from '../Home/Navbar/Navbar'
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import you from '../../assets/images/maps/you.png'

const Maps = (props) => {
  const [latitude, setLat] = React.useState() 
  const [longitude, setLong] = React.useState() 
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [])
  return (
    <>
      <Navbar/>
      <Map
          google={props.google}
          zoom={15}
          initialCenter={{
            lat: 10.044621824581359,
            lng: 76.32852051332098
            
          }}
          >
          <Marker
            position={{
              lat: 10.044649730956461,
              lng: 76.3257525616088
            }}
          />
          <Marker
            position={{
              lat: 10.042147447583712,
              lng: 76.32858664162809
            }}
          />
          <Marker
            position={{
              lat: 10.04835195864365,
              lng: 76.33141127516743
            }}
          />
          <Marker
            position={{
              lat: 10.046063652075532,
              lng: 76.32970138009733
            }}
          />
          <Marker
            position={{
              lat: 10.04324510585702,
              lng: 76.32893617834546
            }}
          />
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
            }}
            icon={{
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/1504px-Map_pin_icon_green.svg.png',
              scaledSize: new google.maps.Size(40,50)
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