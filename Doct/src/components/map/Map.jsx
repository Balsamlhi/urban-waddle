import React from 'react'
import styles from '../map/Map.module.css'
import '../map/map.css'
import {MapContainer ,TileLayer,Marker,Popup} from "react-leaflet"
import '../map/Map.module.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import LeafletGeoCoder from './LeafletGeoCoder';
import LeafletRoutingMachine from './LeafletRoutingMachine';

function Map() {
    const position = [35.7643, 10.8113]
  
 
  return (
    <>
  <MapContainer className={styles.map} center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
    {/* <img className={styles.map} src={map} alt="" /> */}

    </>
  )
}
let DeufaultIcon= L.icon({
  iconUrl:"../src/assets/marker-icon.png",
  iconSize: [25,41],
})

export default Map