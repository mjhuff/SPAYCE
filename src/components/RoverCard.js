import Image from 'next/image';

import Modal from './Modal';

import { useState } from 'react';

//This will contain all the images. Remember to use the Next.js image stuff. Could do iframes if you click the image to go to the full link! User can
//like image through the modal as well.

//TO DO: Fix modal escape.

const RoverCard = ({ urls }) => {
  const [showModal, setShowModal] = useState([false, '']);

  let imageArray;
  if (urls) {
    imageArray = urls.map((url) => {
      return (
        <div key={url}>
          <Image
            src={url}
            alt="Mars Rover Picture"
            width={125}
            height={125}
            quality={75}
            className="m-5 hover:cursor-pointer"
            onClick={() => {
              setShowModal([true, url]);
            }}
          />
        </div>
      );
    });
  }

  return (
    <div className="flex flex-wrap bg-zinc-900/75 rounded-xl">
      <div
        tabIndex={0}
        onKeyDown={(e) =>
          e.key === 'Escape' && showModal ? setShowModal([false, '']) : null
        }
      >
        <Modal
          onClose={() => setShowModal([false, ''])}
          show={showModal[0]}
          roverURL={showModal[1]}
        />
      </div>
      {imageArray}
    </div>
  );
};

export default RoverCard;
