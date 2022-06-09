import React, { EffectCallback, useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useRecoilState } from 'recoil';
import { markerList } from '../recoil/atoms/markers';
import { LeafletMouseEvent } from 'leaflet';

export const SearchField = () => {

  const provider = new OpenStreetMapProvider();
  const [currentMarkerList, setMarkerList] = useRecoilState(markerList);

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    notFoundMessage: 'Sorry, that address could not be found.',
  });

  const map = useMap();

  useEffect(() => {
    map.addControl(searchControl);
    map.on('geosearch/showlocation', (selectedLocation: any) => {

      const marker = currentMarkerList.find((e: any) => e.label === selectedLocation.location.label) 

      if(marker) return;

      setMarkerList((oldMarkerList): any => [
        ...oldMarkerList,
        {
          label: selectedLocation.location.label
        }
      ])
    });
    return () => { map.removeControl(searchControl) };
  }, []);

  return null;
};