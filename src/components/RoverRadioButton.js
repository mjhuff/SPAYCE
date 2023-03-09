import React from 'react';

import { useState, useEffect } from 'react';

const RoverRadioButton = ({ roverNames, setRover }) => {
  const [columnNumber, setColumnNumber] = useState(0);

  let rovers;
  //if rovers from props (need api on actual page and pass down)
  if (roverNames && roverNames.length) {
    rovers = roverNames.map((rover, idx) => {
      //ISSUE IS THAT THE RADIO BUTTON ISN'T CONNECTED TO THE INPUT.
      return (
        <div key={rover + Math.random()} onClick={() => setRover(rover)}>
          <input type="radio" name="option" id={idx} className="peer hidden" />
          <label
            htmlFor={idx}
            className="text-white text-xl block cursor-pointer select-none rounded-xl py-2 px-5 text-center hover:bg-sky-600 peer-checked:bg-sky-700 peer-checked:font-bold"
          >
            {rover}
          </label>
        </div>
      );
    });
  }

  useEffect(() => {
    setColumnNumber(rovers ? rovers.length : 0);
  }, [rovers]);

  if (rovers && rovers.length)
    return (
      <div
        className={`flex space-x-2 rounded-xl bg-zinc-900/75 p-2`}
        x-data="app"
      >
        {rovers}
      </div>
    );
};

export default RoverRadioButton;
