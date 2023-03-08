import { useState } from 'react';

import localFont from 'next/font/local';
const issTitleFont = localFont({ src: './Chronosfer.otf' });

import Modal from '../components/Modal';

const ISSCard = ({ pilots }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPilot, setSelectedPilot] = useState('');

  let issArray;
  if (pilots && pilots.length) {
    issArray = pilots.map((pilot) => {
      return (
        <div
          className="text-white text-2xl text-center last:mb-5 cursor-pointer even:bg-zinc-800 odd:bg-zinc-700 hover:bg-stone-400 rounded-xl"
          key={pilot + Math.random()}
          onClick={() => {
            setShowModal(true);
            setSelectedPilot(pilot.name);
          }}
        >
          {pilot.name}
        </div>
      );
    });
  }

  return (
    <div
      className="pt-32"
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === 'Escape' && showModal ? setShowModal(false) : null
      }
    >
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        pilotName={selectedPilot}
      />
      <div className="bg-zinc-900/75 w-1/3 ml-5 rounded-xl">
        <h1
          className={`${issTitleFont.className} text-white text-center text-5xl ml-5`}
        >
          Current ISS Members
        </h1>
        <div className="grid gap-4 grid-cols-1 my-5">{issArray}</div>
      </div>
    </div>
  );
};

export default ISSCard;

/*
e.key === 'Escape' && showModal
          ? setShowModal(false)
          : console.log(e.key)
*/
