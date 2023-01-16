import React from 'react';
import Image from 'next/image';

const ServicesCard = () => {
  return (
    <div className='card rounded-none card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image
          className='object-cover object-center'
          width={1000}
          height={1000}
          src='https://placeimg.com/400/225/arch'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Finger Print Access</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
          incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
