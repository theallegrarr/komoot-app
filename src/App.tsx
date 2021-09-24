import { useEffect, useState } from 'react';

import Paths from './components/paths/index'
import MapArea from './components/map';
import UpdateLocation from './components/map/utils/UpdateLocation';

export type Coords = {
  lng: number,
  lat: number
}

function App() {
  const [location, setLocation] = useState<Coords>({
    lng: -74.5,
    lat: 40
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      const crd = pos.coords
      setLocation({
        lng: crd.longitude,
        lat: crd.latitude
      })
    })
  }, [])

  return (
    <div className="app">
      <Paths />
      <MapArea
        location={location}
      />
      <UpdateLocation
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
}

export default App;
