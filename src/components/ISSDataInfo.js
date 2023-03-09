import React from 'react';
import ISSDataLoading from './ISSDataLoading';

//Scuffed but works for now.
const labelDict = {
  0: 'Latitude',
  1: 'Longitude',
  2: 'Velocity',
  3: 'Altitude',
};

const ISSDataInfo = ({ ISSData }) => {
  const dataArray = ISSData.map((data, idx) => {
    const transformedData = +data.toFixed(4);
    return (
      <div className="grid grid-cols-2" key={Math.random() + Date.now()}>
        <span className="text-white w-fit my-5 text-xl ml-10">{`${labelDict[idx]}`}</span>
        <span className="text-white my-5 text-xl text-right mr-10">
          {transformedData}
        </span>
      </div>
    );
  });

  if (!ISSData.length) return <ISSDataLoading />;
  return <div className="flex flex-col w-full mt-10">{dataArray}</div>;
};

export default ISSDataInfo;
