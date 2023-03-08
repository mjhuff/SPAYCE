import { useState } from 'react';

import localFont from 'next/font/local';
const issTitleFont = localFont({ src: './Chronosfer.otf' });

import Modal from '../components/Modal';

const ISSCard = ({ pilots }) => {
  const [showModal, setShowModal] = useState(false);

  let issArray;
  if (pilots && pilots.length) {
    issArray = pilots.map((pilot) => {
      return (
        <div
          className="text-white last:mb-5 cursor-pointer pl-5 even:bg-zinc-800 odd:bg-zinc-700 rounded-xl"
          key={pilot}
          onClick={() => setShowModal(true)}
        >
          {pilot.name}
        </div>
      );
    });
  }

  return (
    <div className="pt-52">
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title={'Test Title'}
      />
      <div className="bg-zinc-900/75 w-1/3 ml-5 rounded-xl">
        <h1 className={`${issTitleFont.className} text-white text-5xl ml-5`}>
          Current ISS Members
        </h1>
        <div className="grid gap-4 grid-cols-1 my-5">{issArray}</div>
      </div>
    </div>
  );
};

export default ISSCard;
