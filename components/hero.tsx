import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen bg-gray-600 bt-20'
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=800")`,
      }}
    >
      <div className=' w-full h-full bg-black bg-opacity-70'>
        <div className='w-full h-full text-neutral-content flex flex-col justify-center text-left'>
          <div className='w-full'>
            <p>
              <span className='bg-white px-4 py-2 text-black font-extrabold'>
                CCTV
              </span>
              <span className='bg-rose-800 px-4 py-2 font-bold'>
                SURVEILLANCE
              </span>
            </p>

            <p className='w-full text-gray-300 md:text-start font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
              Unique & Powerful <br />
              Security Solutions
            </p>

            <p className='md:text-2xl md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl'>
              We provide security requirements of residential, commercial and
              other clients, with the largest assortment of security cameras and
              alarm systems installation.
            </p>

            <div className='flex gap-4'>
              <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
                Contact us now!
              </button>
              <button className='btn btn-outline rounded-none border-rose-800 text-gray-300 active:bg-rose-800 hover:bg-rose-900'>
                More About Us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
