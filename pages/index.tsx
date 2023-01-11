import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/hero-section';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
  return (
    <main className='text-black bg-gray-100 overflow-x-hidden pb-10'>
      <Header
        description={`
FEE is a company that provides CCTV products and services for home and business surveillance. They have a team of experts who can help customers find the best solution for their needs, whether it's a single security camera or a comprehensive CCTV system.`}
        title={'Home | FINLAC IT & ENG. LTD.'}
        image={'https://finlac-i-t-engineering-ltd.vercel.app/website.png'}
        type={'website'}
        url={''}
        alt={'FINLAC IT & ENG. LTD'}
        keywords={'cars,books,shoes,sex,bad,cats'}
        publishedAt={'2020-06-15T16:20:37+00:00'}
        updatedAt={'2020-06-15T16:20:37+00:00'}
        MIME={'png'}
        author_name={''}
      />
      {/* <Navbar /> */}
      <Hero />
      {/* <HeroSection /> */}
      <section
        className={`w-full h-auto py-10 flex justify-center items-center`}
      >
        <Image
          width={1000}
          height={1000}
          className={`w-64 z-[100]`}
          src='/flir.png'
          alt=''
        />
        <Image
          width={1000}
          height={1000}
          className={`w-64 z-[100]`}
          src='/hik.png'
          alt=''
        />
        <Image
          width={1000}
          height={1000}
          className={`w-64 z-[100]`}
          src='/van.png'
          alt=''
        />
        <Image
          width={1000}
          height={1000}
          className={`w-64 z-[100]`}
          src='/vicon.png'
          alt=''
        />
        <Image
          width={1000}
          height={1000}
          className={`w-64 z-[100]`}
          src='/ava.png'
          alt=''
        />
      </section>

      <section className='w-full flex flex-col gap-10 lg:flex-row'>
        <div className='z-[100] w-full lg:w-[50%] h-full flex- flex-col gap-5 justify-center'>
          <h2 className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100] lg:max-w-lg'>
            From Door And Window Sensors To Mobile Apps And Cameras System!
          </h2>
          <p className='md:text-xl w-full mt-5'>
            Whether you are at home or on the road, it’s never been easier to
            keep your family and home safe and secure.
          </p>

          <p className='md:text-lg w-full text-gray-500 my-5'>
            Certified Security works with you to custom design a system to meet
            your individual needs and budget. We provide everything you need
            from a basic burglar and fire alarm to sophisticated “all-in-one”
            system.
          </p>

          <div className='flex gap-4'>
            <button className='inline-flex items-center justify-center gap-1 btn btn-primary rounded-none bg-rose-800 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
              Protect My Home <AiOutlineArrowDown />
            </button>
            <button className='btn btn-outline rounded-none border-rose-800 text-black-300 active:bg-rose-800 hover:bg-rose-900'>
              Get A Quotes with us!
            </button>
          </div>
        </div>

        <div className='relative w-full h-full'>
          <div className='w-full before:block before:absolute before:bg-gray-100 before:h-32 before:w-64 before:z-[1] before:-rotate-[45deg] before:-top-[2.5rem] before:-left-[5.5rem] relative h-full'>
            <Image
              className='object-center object-cover w-full h-full'
              src='https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt=''
              width={500}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section className=' h-auto pt-10 flex flex-col gap-4 px-4 2xl:px-3'>
        <span className='uppercase text-sm font-extralight'>Our Services</span>
        <p className='text-xl font-bold'>
          High-Quality Alarm and Security Services
        </p>

        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='card w-full md:w-96 bg-base-100 shadow-xl'>
            <figure>
              <Image
                width={1000}
                height={1000}
                className='w-full'
                src='https://placeimg.com/400/225/arch'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Security Systems</h2>
              <p>
                We install burglar alarm systems with all extents of protection,
                vaults, and panic alarms.
              </p>
              <div className='card-actions justify-start'>
                <button className='btn btn-primary'>Read more</button>
              </div>
            </div>
          </div>
          <div className='card w-full md:w-96 bg-base-100 shadow-xl'>
            <figure>
              <Image
                width={1000}
                height={1000}
                className='w-full'
                src='https://placeimg.com/400/225/arch'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Central Station Monitoring</h2>
              <p>
                We offer 24-hour central station monitoring service for all
                installations.
              </p>
              <div className='card-actions justify-start'>
                <button className='btn btn-primary'>Read more</button>
              </div>
            </div>
          </div>
          <div className='card w-full md:w-96 bg-base-100 shadow-xl'>
            <figure>
              <Image
                width={1000}
                height={1000}
                className='w-full'
                src='https://placeimg.com/400/225/arch'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Fire Alarm Systems</h2>
              <p>
                Our company sells, installs, and maintains complete integrated
                fire alarm systems
              </p>
              <div className='card-actions justify-start'>
                <button className='btn btn-primary'>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
