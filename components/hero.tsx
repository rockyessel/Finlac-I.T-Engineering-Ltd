import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1493540447904-49763eecf55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <section className='w-full h-auto pt-10 flex flex-col md:flex-row md:items-center md:justify-around px-4 2xl:px-3'>
          <div className='md:max-w-lg order-2 md:order-1 flex flex-col items-center md:items-start gap-2'>
            <h1 className='w-full mb-2 text-center md:text-start font-extrabold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
              Total
              <br />
              <span>Digital</span>
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-800 via-teal-800'>
                Surveillance
              </span>
            </h1>

            <p className='xl:text-3xl md:max-w-md'>
              There&apos;s no need to fret about your home or workplace security
              anymore.
            </p>

            <button className='btn'>Contact us now</button>
          </div>
          <div className='order-1 md:order-2'>
            <Image
              src='/cctvalll.png'
              className='md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'
              width={1300}
              height={500}
              alt='cctvall'
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
