import React from 'react';
import Image from 'next/image';
function HeroSection() {
  const [show, setShow] = React.useState<boolean>(false);

  return (
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
  );
}

export default HeroSection;

/*
        <p className='text-gray-300'>
          Welcome to our CCTV website! We offer a wide range of CCTV products
          and services to meet your surveillance needs. Our team of experts can
          help you find the best solution for your home or business, whether you
          need a simple security camera or a comprehensive CCTV system. With our
          advanced technology and reliable customer support, you can trust us to
          keep an eye on what matters most to you. Explore our website to learn
          more about our products and services, and don&apos;t hesitate to
          contact us for more information or to request a quote. Thank you for
          choosing
          <span className='text-white font-bold p-1'>FEE</span> for your CCTV
          needs.
        </p>

*/
