import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import {useMap} from 'react-leaflet'

function LeafletRoutingMachine() {
    const map = useMap();
    var marker1=L.marker([35.821430, 10.634422]).addTo(map);
    useEffect(()=>{
        map.on('click',function(e) {
            L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
            L.Routing.control({
                waypoints: [
                  L.latLng(35.821430, 10.634422),
                  L.latLng(e.latlng.lat,e.latlng.lng)
                ],
                lineOptions:{
                    styles:[
                        {
                            color:"blue",
                        }
                    ]
                },
                routeWhileDragging:true,
                geocoder:L.Control.Geocoder.nominatim(),
                addWaypoints:false,
                draggableWaypoints:false,
                fitSelectedRoutes:true,
                showAlternatives:true,
              }).addTo(map);
        })
    },[])
  return null;
}

export default LeafletRoutingMachine