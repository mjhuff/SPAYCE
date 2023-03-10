import React from 'react';

import { useState, useEffect } from 'react';

/*

Needs serious refactoring, but does handle loading.

*/
const RoverRadioButton = ({ roverNames, setRover, isLoading }) => {
  const [columnNumber, setColumnNumber] = useState(0);

  let rovers;
  //if rovers from props (need api on actual page and pass down)
  if (!isLoading) {
    rovers = roverNames.map((rover, idx) => {
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

  if (isLoading)
    return (
      <div className="flex justify-left items-center bg-zinc-900/75 w-[34rem] h-14 rounded-xl">
        <div className="flex justify-center items-center mx-5 my-2 bg-gray-600 w-full h-3/4 rounded-xl animate-pulse text-white text-xl">
          Loading...
        </div>
      </div>
    );
  if (!isLoading)
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
