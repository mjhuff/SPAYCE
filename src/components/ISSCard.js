import { useState, useEffect } from 'react';

import localFont from 'next/font/local';
const issTitleFont = localFont({ src: './Chronosfer.otf' });

import Modal from '../components/Modal';

const ISSCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPilot, setSelectedPilot] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [pilotsList, setPilotsList] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch('http://api.open-notify.org/astros.json', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await res.json();
      setPilotsList(data.people);
      setIsLoading(false);
    })();
  }, []);

  let issArray;
  if (!isLoading) {
    issArray = pilotsList.map((pilot) => {
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
  } else {
    issArray = [];
    for (let i = 0; i <= 13; i++) {
      issArray.push(
        <div
          className="last:mb-5 cursor-pointer even:bg-zinc-800 odd:bg-zinc-700 hover:bg-stone-400 rounded-xl w-full h-8 animate-pulse"
          key={Math.random() + Date.now()}
        />
      );
    }
  }

  return (
    <div
      className="pt-32 h-2/5 w-2/5"
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
      <div className="bg-zinc-900/75 w-4/5 ml-5 rounded-xl">
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
