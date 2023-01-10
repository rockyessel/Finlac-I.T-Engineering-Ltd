import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/hero-section';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Hero from '../components/hero';

const Home = () => {
  const [progress, setProgress] = React.useState<string>('0');

  return (
    <main className='text-black bg-gray-300 overflow-x-hidden pb-10'>
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
      <Navbar />
      <Hero />
      {/* <HeroSection /> */}
      <section className='w-full h-auto pt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-around px-4 2xl:px-3'>
        <div>
          <h2 className='text-xl font-bold'>
            Your Home and Office Security is Our Priority
          </h2>
          <p className='xl:text-3xl md:max-w-md mt-5'>
            Whether you are at home or on the road, it’s never been easier to
            keep your family and home safe and secure.
          </p>

          <p className='xl:text-3xl md:max-w-md text-gray-500 my-5'>
            Certified Security works with you to custom design a system to meet
            your individual needs and budget. We provide everything you need
            from a basic burglar and fire alarm to sophisticated “all-in-one”
            system.
          </p>

          <button className='btn btn-primary'>Contact us now</button>
        </div>

        <div className='w-full'>
          <Image
            className='rounded-md'
            src='https://template66389.motopreview.com/mt-demo/66300/66389/mt-content/uploads/2018/02/mt-1353-home-img01.jpg'
            alt=''
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className='w-full h-auto pt-10 flex flex-col gap-4 px-4 2xl:px-3'>
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
      {/* <div className='radial-progress' style={{ '--value':  }}>
        {progress}%
      </div>

      <label>Progress bar</label>
      <input
      title='vhgbnj'
        type='range'
        name=''
        value={progress}
        onChange={(event) => setProgress(event.target.value)}
        min={0}
        max={100}
        id=''
      /> */}

      <section></section>
    </main>
  );
};

export default Home;
