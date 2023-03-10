import { useEffect, useState } from 'react';

import Image from 'next/image';
import skyBG from '../../public/space-bg.jpg';

import Script from 'next/script';

import PageTitle from '../components/PageTitle';
import MainNavbar from '../components/MainNavbar';
import ISSCard from '../components/ISSCard';
import GlobeCard from '../components/GlobeCard';
import ISSDataInfo from '../components/ISSDataInfo';
import StarBackground from '../components/StarBackground';

import localFont from 'next/font/local';
const issTitleFont = localFont({ src: '../components/Chronosfer.otf' });

/*

We're passing data up from GlobeCard to pass it back down to the ISS card. 
Inefficient for sure. Should be getting the data here and passing it down into child components.

*/
const ISS = () => {
  const [ISSData, setISSData] = useState([]);

  // useEffect(() => {
  //   setPilotsList(pilots.people);
  // }, [pilots.people]);

  //For the outer div if I decide to use a gradient: className="bg-gradient-to-b from-space-black to-deep-black w-screen h-screen
  //{ altitude, longitude, latitude, velocity }
  const ISSDataHandler = (issData) => {
    const { latitude, longitude, velocity, altitude } = issData;
    return setISSData([latitude, longitude, velocity, altitude]);
  };

  /*
   */
  return (
    <>
      <PageTitle title={'SPAYCE - ISS'} />
      <div className="flex justify-between w-screen h-screen">
        <MainNavbar
          firstPath={'home'}
          secondPath={'mars'}
          isLandingPage={false}
        />
        <ISSCard />
        <div className="bg-zinc-900/75 rounded-xl flex flex-col items-center mt-52 w-1/4 h-2/5">
          <h1 className={`${issTitleFont.className} text-white text-5xl`}>
            Current ISS Data
          </h1>
          <ISSDataInfo ISSData={ISSData} />
        </div>
        <div className="grow w-1/2 mr-5 mb-5 mt-32 rounded-xl flex flex-col justify-end items-end">
          <GlobeCard issDataHandler={ISSDataHandler} />
        </div>
      </div>
    </>
  );
};

export default ISS;

// This function gets called at build time
//YOU CAN ONLY CALL IT FROM NEXT.JS PAGES, NOT IN YOUR COMPONENTS FOLDER!
// export async function getStaticProps() {
//   // Call an external API endpoint to get pilots

//   // By returning { props: { pilots } }, the ISSCard component
//   // will receive `pilots` as a prop at build time
//   return {
//     props: {
//       pilots,
//     },
//   };
// }
