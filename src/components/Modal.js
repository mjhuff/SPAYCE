import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

//Click somewhere other than X on modal background to close page.
function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div
      id="overlay"
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50"
    >
      <div id="styled-modal" className="bg-white w-1/4 h-1/4 rounded-xl p-4">
        <div id="modal-header" className="flex justify-end text-2xl">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <h1 id="modal-title">Test Title</h1>}
        <div id="modal-body" className="pt-10">
          Test Body
        </div>
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
