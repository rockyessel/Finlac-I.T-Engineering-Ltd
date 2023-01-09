import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/hero-section';
import Navbar from '../components/navbar';
import Header from '../components/header';

const Home = () => {
  return (
    <main>
      <Header
        description={`
FEE is a company that provides CCTV products and services for home and business surveillance. They have a team of experts who can help customers find the best solution for their needs, whether it's a single security camera or a comprehensive CCTV system.`}
        title={'Home | FINLAC IT & ENG. LTD.'}
        image={'/website.png'}
        type={'website'}
        url={''}
        alt={'FINLAC IT & ENG. LTD'}
        keywords={'cars,books,shoes,sex,bad,cats'}
        publishedAt={'2020-06-15T16:20:37+00:00'}
        updatedAt={'2020-06-15T16:20:37+00:00'}
        MIME={'png'}
        author_name={''}
      />
      <Navbar />
      <HeroSection />
      <section className='w-full h-auto pt-10 flex flex-col md:flex-row md:items-center md:justify-around px-4 2xl:px-3'>
        <div>
          <h2>Your Home and Office Security is Our Priority</h2>
          <p className='xl:text-3xl md:max-w-md'>
            Whether you are at home or on the road, it’s never been easier to
            keep your family and home safe and secure.
          </p>

          <p className='xl:text-3xl md:max-w-md'>
            Certified Security works with you to custom design a system to meet
            your individual needs and budget. We provide everything you need
            from a basic burglar and fire alarm to sophisticated “all-in-one”
            system.
          </p>

          <button className='font-medium md:text-2xl w-fit duration-500 shadow-sm hover:shadow-teal-400 px-5 py-3 hover:bg-gradient-to-l bg-gradient-to-r hover:from-cyan-500 from-cyan-500 hover:to-teal-600 to-teal-600 rounded-md text-black'>
            Contact us now
          </button>
        </div>

        <div className='w-[30rem]'>
          <Image
            src='https://template66389.motopreview.com/mt-demo/66300/66389/mt-content/uploads/2018/02/mt-1353-home-img01.jpg'
            alt=''
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
