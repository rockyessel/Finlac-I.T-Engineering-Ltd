import React from 'react';

const ScreenButton = () => {
  return (
    <section className='fixed w-[100px] h-[100px] right-0 top-1/2 rotate-90 hidden md:flex md:gap-1 z-[101]'>
      <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:text-black active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
        Contact us now!
      </button>
      <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:text-black active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
        More About Us!
      </button>
    </section>
  );
};

export default ScreenButton;
