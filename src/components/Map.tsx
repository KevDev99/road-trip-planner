import React, { useEffect } from 'react';
import { Header } from './Header';

import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet';
import { SearchField } from './GeoSearch';

import { useRecoilValue } from 'recoil';
import { markerList } from '../recoil/atoms/markers';



export default function Map() {
  const position: [number, number] = [51.505, -0.09];
  return (
    <div>
      <MapContainer center={position} zoom={6} zoomControl={false}  >
        <TileLayer

          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
        <SearchField />
      </MapContainer>
    </div >
  )
}
