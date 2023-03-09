import dynamic from 'next/dynamic';

import HEX_DATA from '../data/countriesHexData.json';

import { useState, useEffect, useRef, useCallback } from 'react';

let Globe = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

const GlobeCard = ({ issDataHandler }) => {
  const globeEl = useRef();
  const [ISSPosition, setISSPosition] = useState({
    lat: 0,
    lng: 0,
    label: 'ISS',
  });

  const [hex, setHex] = useState({ features: [] });

  //Set the globe mesh on load.
  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  //Used to get the new ISS position every X seconds.
  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      (async () => {
        //Get the ISS data w/ fetch. Update the state.
        const res = await fetch(
          'https://api.wheretheiss.at/v1/satellites/25544'
        );
        const data = await res.json();
        issDataHandler(data);
        setISSPosition({
          lat: data.latitude,
          lng: data.longitude,
          label: 'ISS',
        });
      })();
    }, 5000); //Every 5 seconds
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [issDataHandler]);

  //Set the map center to the ISS.
  useEffect(() => {
    const MAP_CENTER = {
      lat: ISSPosition.lat,
      lng: ISSPosition.lng,
      altitude: 2,
    };
    globeEl.current.pointOfView(MAP_CENTER, 1000);
  }, [globeEl, ISSPosition]);

  return (
    <div className="">
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"
        labelsData={
          ISSPosition.lat !== 0 && ISSPosition.lng !== 0 ? [ISSPosition] : ''
        }
        labelText={'label'}
        labelSize={3}
        labelColor={useCallback(() => 'white', [])}
        labelDotRadius={1}
        labelAltitude={0.05}
        hexPolygonsData={hex.features}
        hexPolygonResolution={3} //values higher than 3 makes it buggy
        hexPolygonMargin={0.62}
        hexPolygonColor={useCallback(() => '#1b66b1', [])}
        height={750}
        width={750}
      />
    </div>
  );
};

export default GlobeCard;
