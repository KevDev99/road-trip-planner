import React, { useEffect } from 'react';
import { Header } from './components/Header';
import Map from './components/Map';
import Trip from './components/Trip';


function App() {


  // get current location
  useEffect(() => {
    const getPosition = async () => {
      await navigator.geolocation.getCurrentPosition(
        position => console.log(position.coords)
      );
    }

    getPosition();
  }, [])
  
  return (
    <>
      <Header />
      <Map />
      <Trip />
    </>
  );
}

export default App;
