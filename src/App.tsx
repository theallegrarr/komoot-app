import { useState } from 'react';

import Paths from './components/paths/index'
import MapArea from './components/map';

function App() {
  const [points, setPoints] = useState<any[]>([])
  return (
    <div className="app">
      <Paths />
      <MapArea
        points={points}
        setPoints={setPoints}
      />
    </div>
  );
}

export default App;
