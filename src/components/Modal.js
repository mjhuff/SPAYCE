import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

//FINISH SETTING UP THE MODAL! USE THE CLASSES FROM THE SITE.
function Modal({ show, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className="bg-red-800 bg-cover"></div>
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
