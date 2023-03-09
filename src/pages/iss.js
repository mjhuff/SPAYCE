import { useEffect, useState } from 'react';

import Image from 'next/image';
import skyBG from '../../public/space-bg.jpg';

import Script from 'next/script';

import PageTitle from '../components/PageTitle';
import MainNavbar from '../components/MainNavbar';
import ISSCard from '../components/ISSCard';
import GlobeCard from '../components/GlobeCard';

const ISS = ({ pilots }) => {
  const [pilotsList, setPilotsList] = useState('');

  useEffect(() => {
    setPilotsList(pilots.people);
  }, [pilots.people]);

  //For the outer div if I decide to use a gradient: className="bg-gradient-to-b from-space-black to-deep-black w-screen h-screen

  /*
   */
  return (
    <>
      <PageTitle title={'SPAYCE - ISS'} />
      <div className="flex justify-between bg-black w-screen h-screen">
        <MainNavbar
          firstPath={'home'}
          secondPath={'mars'}
          isLandingPage={false}
        />
        <ISSCard pilots={pilotsList} />
        <div className="bg-zinc-900/75 grow w-2/3 mr-5 mb-5 mt-32 rounded-xl flex flex-col justify-end items-end">
          <div>Test</div>
          <GlobeCard />
        </div>
      </div>
    </>
  );
};

export default ISS;

// This function gets called at build time
//YOU CAN ONLY CALL IT FROM NEXT.JS PAGES, NOT IN YOUR COMPONENTS FOLDER!
export async function getStaticProps() {
  // Call an external API endpoint to get pilots
  const res = await fetch('http://api.open-notify.org/astros.json', {
    headers: {
      Accept: 'application/json',
    },
  });
  const pilots = await res.json();

  // By returning { props: { pilots } }, the ISSCard component
  // will receive `pilots` as a prop at build time
  return {
    props: {
      pilots,
    },
  };
}
