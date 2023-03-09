import PageTitle from '../components/PageTitle';
import MainNavbar from '../components/MainNavbar';
import RoverRadioButton from '../components/RoverRadioButton';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';

import RoverImagesContainer from '../components/RoverImagesContainer';

const roverSelectionFont = localFont({ src: '../components/Chronosfer.otf' });

/*

Idea here is to have an array of the container which has the dates and the photos.
If it's the first parent, don't have a top border. If it's a child, don't have a bottom border.

SUPER easy to paginate, since the api does it for us: https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=X.

Let people specify the rover?

*/

/*

TO DO: 
Have components loading while waiting on API data for the rover buttons. Redirect user to Mars page IMMEDIATELY.
Solve radio button bug.
*/
const Mars = ({ roversList }) => {
  const [roverNames, setRoverNames] = useState('');
  const [selectedRover, setSelectedRover] = useState('');

  //Only pull out the actual rover names.
  useEffect(() => {
    const roverNames = roversList.rovers.map((rover) => rover.name);
    setRoverNames(roverNames);
  }, [roversList]);

  const setRoverHandler = (rover) => {
    if (selectedRover !== rover) setSelectedRover(rover);
  };

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
          <RoverRadioButton
            roverNames={roverNames}
            setRover={setRoverHandler}
          />
        </div>
        {selectedRover && <RoverImagesContainer rover={selectedRover} />}
      </div>
    </>
  );
};

export default Mars;

export async function getStaticProps() {
  // Call an external API endpoint to get rovers.
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
