import React from 'react';

const ISSDataLoading = () => {
  return (
    <div className="flex flex-col items-left flex-wrap w-full ml-10">
      <div className="bg-gray-600 h-10 my-5 animate-pulse w-1/2 mt-10 rounded-xl" />
      <div className="bg-gray-500 h-10 my-5 animate-pulse w-11/12 rounded-xl" />
      <div className="bg-gray-400 h-10 my-5 animate-pulse w-3/4 rounded-xl" />
      <div className="bg-gray-600 h-10 my-5 animate-pulse w-2/3 mb-5 rounded-xl" />
    </div>
  );
};

export default ISSDataLoading;
