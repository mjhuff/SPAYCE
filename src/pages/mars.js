import PageTitle from '../components/PageTitle';
import MainNavbar from '../components/MainNavbar';
import RoverRadioButton from '../components/RoverRadioButton';
import StarBackground from '../components/StarBackground';

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


/*

Get a list of rovers to populate the rover radio buttons, which we pass down. 

*/
const Mars = () => {
  const [roverNames, setRoverNames] = useState(null);
  const [selectedRover, setSelectedRover] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('in use effect');

    (async () => {
      const res = await fetch(
        'https://mars-photos.herokuapp.com/api/v1/rovers/',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      const data = await res.json();
      const roverNames = data.rovers.map((rover) => rover.name);
      setRoverNames(roverNames);
      setIsLoading(false);
    })();
  }, []);

  const setRoverHandler = (rover) => {
    if (selectedRover !== rover) setSelectedRover(rover);
  };

  return (
    <>
      <PageTitle title={'SPAYCE - Mars Images'} />
      <div className="w-screen h-screen">
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
            isLoading={isLoading}
          />
        </div>
        {selectedRover && <RoverImagesContainer rover={selectedRover} />}
      </div>
    </>
  );
};

export default Mars;
