import RoverCard from './RoverCard';

import { useState, useEffect } from 'react';

//This logic needs to handle rover images by page. Look at the date and render in the same rover card if the date is the same for each given image.
//https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=1

//TO DO: API ERROR HANDLING.
//TO DO: PAGINATED LOADING!

const RoverImagesContainer = ({ rover }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [currentURLs, setCurrentURLS] = useState([]);

  //You'll render all your rover cards in here.
  useEffect(() => {
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
        setCurrentURLS(imageURLS);
      });
  }, [rover, pageNumber]);

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
