import React from 'react';

import { useState } from 'react';

const RoverRadioButton = ({ roverNames }) => {
  let rovers;
  //if rovers from props (need api on actual page and pass down)
  if (roverNames && roverNames.length) {
    rovers = roverNames.map((rover, idx) => {
      //ISSUE IS THAT THE RADIO BUTTON ISN'T CONNECTED TO THE INPUT.
      return (
        <div key={rover + Math.random()}>
          <input
            type="radio"
            name="option"
            id={`${idx}`}
            className="peer hidden"
          />
          <label
            htmlFor={`${idx}`}
            className="text-white block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-sky-600 peer-checked:font-bold peer-checked:text-white"
          >
            {rover}
          </label>
        </div>
      );
    });
  }

  if (rovers && rovers.length)
    return (
      <div
        className={`grid w-[40rem] grid-cols-${rovers.length} space-x-2 rounded-xl bg-zinc-900/75 p-2`}
        x-data="app"
      >
        {rovers}
      </div>
    );
  else return <></>;
};

export default RoverRadioButton;
