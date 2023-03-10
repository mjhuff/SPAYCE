import RoverCard from './RoverCard';

import { useState, useEffect, useCallback } from 'react';

//This logic needs to handle rover images by page. Look at the date and render in the same rover card if the date is the same for each given image.
//https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=1

//TO DO: API ERROR HANDLING.
//TO DO: PAGINATED LOADING!

/*

Infinite scrolling requires a good bit of state. Making repeated fetch requests each time. 

*/

const RoverImagesContainer = ({ rover }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [currentURLs, setCurrentURLS] = useState([]);
  const [currentRover, setCurrentRover] = useState('');

  //Render only the first set of rover cards here. We'll render more rover cards elsewhere.
  useEffect(() => {
    //Reset the state if the rover changes.
    if (rover !== currentRover) {
      setCurrentRover(rover);
      setPageNumber(1);
      setCurrentURLS([]);
    }
    fetch(
      `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/photos?sol=1000&page=${pageNumber}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const imageURLS = data.photos.map((photo) => photo.img_src);
        setCurrentURLS((currURLs) => [...currURLs, ...imageURLS]);
      });
  }, [rover, pageNumber, currentRover]);

  //Infinite scrolling logic.
  const onScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPageNumber(pageNumber + 1);
    }
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div className="mt-14 mx-5">
      {rover && currentURLs.length && <RoverCard urls={currentURLs} />}
      {rover && !currentURLs.length && (
        <h1 className="text-white">No Images Exist for Selected Rover</h1>
      )}
    </div>
  );
};

export default RoverImagesContainer;

//Async logic to get all the pictures...
