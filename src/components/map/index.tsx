import { useState, useRef, useEffect } from "react";
import mapboxgl, {MapMouseEvent} from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 

import Map from "./utils/Map";
import Container from './index.style'

import _trash from '../../assets/icons8-trash.svg'
import menu from '../../assets/icons8-menu.svg'
import { Coords } from "../../App";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
type Props = {
  location: Coords
}
function MapboxMap({ location }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState<mapboxgl.Map>();

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    const paths: any[] = []
    if (typeof window === "undefined" || node === null) return;
    const listItems = document.getElementsByClassName("path-item")
    Array.from(listItems).forEach(element => {
      if(element.parentNode){
        element.parentNode.removeChild(element);
      }
    });

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [location.lng, location.lat],
      zoom: 9,
    });


    mapboxMap.on('click', async (e: MapMouseEvent) => {
      paths.push([e.lngLat.wrap().lng, e.lngLat.wrap().lat])
      localStorage.setItem('paths', JSON.stringify(paths))

      // add marker
      const count = document.getElementsByClassName('marker').length
      const customMarker = document.createElement("div");
      const content = document.createTextNode((count+1).toString())
      customMarker.className = 'marker'
      customMarker.appendChild(content)

      // add route builder element
      const pathItem = document.createElement('div')
      const element = document.createElement('div')
      const routeList = document.getElementsByTagName('ul')

      element.className = 'left'
      const _text = document.createTextNode('lon: '+JSON.stringify(e.lngLat.wrap().lng)+' lat: '+JSON.stringify(e.lngLat.wrap().lat))
      const img = document.createElement('img')
      const trash = document.createElement('img')
      trash.src = _trash
      img.src = menu
      img.alt = 'move'

      // append all elements to the DOM
      element.appendChild(img)
      element.appendChild(_text)
      pathItem.appendChild(element)
      pathItem.appendChild(trash)

      // delete marker listener
      pathItem.className = `path-item ${(count+1).toString()}`
      trash.className = `${(count+1).toString()}`

      // Add the marker to mapbox
      const marker = new mapboxgl.Marker(customMarker)
        .setLngLat([e.lngLat.wrap().lng, e.lngLat.wrap().lat])
      
        marker.addTo(mapboxMap);

      // Add line to map
      mapboxMap.addSource(`route ${(count+1).toString()}`, {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': paths
            }
          }
        });


      // style routes
      mapboxMap.addLayer({
          'id': `route ${(count+1).toString()}`,
          'type': 'line',
          'source': `route ${(count+1).toString()}`,
          'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
          'paint': {
          'line-color': '#888',
          'line-width': 8
        }
      });


      trash.addEventListener('click', () => {
        marker.remove()
        routeList[0].removeChild(pathItem)
        // remove line from map
        mapboxMap.removeLayer(`route ${(count+1).toString()}`)
        mapboxMap.removeSource(`route ${(count+1).toString()}`);
      })

      if(routeList){
        routeList[0].appendChild(pathItem)
      }
    });

    // save the map object to React.useState
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };

  }, [setMap, location]);

    return <Container>
      <Map mapNode={mapNode} />
    </Container>;
}

export default MapboxMap