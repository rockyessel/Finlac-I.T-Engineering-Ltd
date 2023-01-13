import Image from 'next/image';
import React from 'react';

const Sponsors = () => {
  const cctv_manufacturer = [
    { image: '/flir.png' },
    { image: '/hik.png' },
    { image: '/van.png' },
    { image: '/vicon.png' },
    { image: '/ava.png' },
  ];

  return (
    <section
      id='container'
      className={`w-full h-auto flex justify-between items-center px-4 overflow-hidden`}
    >
      {cctv_manufacturer?.map((image, index) => (
        <Image
          key={index}
          width={1000}
          height={1000}
          className={`w-full h-12 md:w-64 z-[100] items`}
          src={image?.image}
          alt={image?.image}
        />
      ))}
    </section>
  );
};

export default Sponsors;
