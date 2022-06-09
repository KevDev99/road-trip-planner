import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { markerList } from '../recoil/atoms/markers';
import { Location } from './Location';

const Trip = () => {
  const markers = useRecoilValue(markerList);

  return (
    <div className='tripContainer'>
      <h2>Your Trip</h2>

        <ul className="locations">
          {markers.map((marker: { label: string }) =>
            <Location label={marker.label} icon={FaLocationArrow} />)
          }
        </ul>
   
    </div>
  )
}

export default Trip