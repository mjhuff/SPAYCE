import { useEffect, useState } from 'react';

import Image from 'next/image';
import skyBG from '../../public/space-bg.jpg';

import PageTitle from '../components/PageTitle';
import MainNavbar from '../components/MainNavbar';
import ISSCard from '../components/ISSCard';

const ISS = ({ pilots }) => {
  const [pilotsList, setPilotsList] = useState('');

  useEffect(() => {
    setPilotsList(pilots.people);
  }, [pilots.people]);

  //For the outer div if I decide to use a gradient: className="bg-gradient-to-b from-space-black to-deep-black w-screen h-screen
  return (
    <>
      <PageTitle title={'SPAYCE - ISS'} />
      <div className="bg-black w-screen h-screen">
        {/* <Image
        src={skyBG}
        alt="Starscape Background"
        fill
        className="bg-no-repeat bg-center -z-10"
        quality={10}
        priority={true}
      /> */}
        <MainNavbar
          firstPath={'home'}
          secondPath={'mars'}
          isLandingPage={false}
        />
        <ISSCard pilots={pilotsList} />
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
