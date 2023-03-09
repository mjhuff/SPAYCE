import React from 'react';
import Image from 'next/image';

const StarBackground = () => {
  return (
    <Image
      className="w-screen h-screen object-cover fixed inset-0 -z-10"
      src="/space-bg.jpg"
      fill
      alt="Space Background"
    />
  );
};

export default StarBackground;
