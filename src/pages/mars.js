import PageTitle from '../components/PageTitle';
import MainNavbar from '../components/MainNavbar';
import RoverRadioButton from '../components/RoverRadioButton';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';

const roverSelectionFont = localFont({ src: '../components/Chronosfer.otf' });

/*

Idea here is to have an array of the container which has the dates and the photos.
If it's the first parent, don't have a top border. If it's a child, don't have a bottom border.

SUPER easy to paginate, since the api does it for us: https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=X.

Let people specify the rover?

*/
const Mars = ({ roversList }) => {
  const [roverNames, setRoverNames] = useState('');

  //Only pull out the actual rover names.
  useEffect(() => {
    const roverNames = roversList.rovers.map((rover) => rover.name);
    setRoverNames(roverNames);
  }, [roversList]);

  return (
    <>
      <PageTitle title={'SPAYCE - Mars Images'} />
      <div className="bg-black w-screen h-screen">
        <MainNavbar
          firstPath={'home'}
          secondPath={'iss'}
          isLandingPage={false}
        />
        <div className="flex flex-col pt-32 justify-center items-center">
          <h2
            className={`${roverSelectionFont.className} text-white mb-5 text-5xl`}
          >
            Select a Rover
          </h2>
          <RoverRadioButton roverNames={roverNames} />
        </div>
      </div>
    </>
  );
};

export default Mars;

export async function getStaticProps() {
  // Call an external API endpoint to get pilots
  const res = await fetch('https://mars-photos.herokuapp.com/api/v1/rovers/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const roversList = await res.json();

  // By returning { props: { pilots } }, the ISSCard component
  // will receive `pilots` as a prop at build time
  return {
    props: {
      roversList,
    },
  };
}
