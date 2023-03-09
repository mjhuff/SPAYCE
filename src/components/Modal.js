import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import pilotURLs from '../data/pilotURL';
import FavoriteButton from './FavoriteButton';

//Click somewhere other than X on modal background to close page.
//To implement the same close logic on escape press, you need to be able to inject JS into the iframe.
//TO DO: Implement URLs to work.
function Modal({ show, onClose, pilotName, roverURL }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const URL = pilotName ? pilotURLs[pilotName] : roverURL;

  const modalContent = show ? (
    <div
      id="overlay"
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/75`}
    >
      <div
        id="styled-modal"
        className={`flex flex-col bg-white rounded-xl p-4 ${
          pilotName ? 'w-3/4 h-3/4' : `w-[50vw] h-[75vh]`
        }`}
      >
        <div
          id="modal-header"
          className={`grow-0 flex ${
            roverURL ? 'justify-between' : 'justify-end'
          } text-2xl`}
        >
          {roverURL ? <FavoriteButton url={URL} /> : null}
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <iframe id="modal-body" className="w-100 h-100 grow" src={URL} />
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}

export default Modal;
