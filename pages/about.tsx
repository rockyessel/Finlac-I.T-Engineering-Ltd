import React from 'react';
import { Hero, ScreenButton } from '../components/index';
import Image from 'next/image';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import Header from '../components/header';
import { AiOutlineArrowDown } from 'react-icons/ai';

const About = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Header
        description={`FEE is a company that provides CCTV products and services for home and business surveillance. They have a team of experts who can help customers find the best solution for their needs, whether it's a single security camera or a comprehensive CCTV system.`}
        title={'About us | FINLAC IT & ENG. LTD.'}
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
      <ScreenButton />
      <Hero />

      <section className='grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-10 py-5 px-4'>
        <Image
          className='h-[25.5rem] w-full object-cover object-center rounded-md'
          src='https://images.unsplash.com/photo-1600132806277-725b2e67ff38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
          width={1000}
          height={1000}
          alt=''
        />

        <div className='w-full lg:max-w-2xl'>
          <span className='font-bold text-rose-800 text-sm uppercase'>
            About us
          </span>
          <p className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100]'>
            Dedicated Team With Ontime Response The Leader In Protecting
          </p>
          <div className='pr-4 py-10 flex flex-col gap-5'>
            <p>
              FEE is a CCTV company that has been in business for 4 years,
              providing top-notch security solutions for homes and businesses.
              Our team is composed of experts who are highly skilled and
              knowledgeable in all aspects of CCTV installation and maintenance.
              We take pride in our ability to deliver high-quality, reliable,
              and cost-effective services to our clients.
            </p>

            <p>
              Our company specializes in CCTV systems that are designed to meet
              the specific needs of each of our clients. We understand that
              every property is unique and requires a custom solution.
              That&apos;s why we work closely with our clients to understand
              their needs and design a system that will work best for them. Our
              team of experts will then install and maintain the system,
              ensuring that it is always in optimal working condition.
            </p>

            {/* <p>
              In addition to CCTV installation, we also offer a range of other
              services including remote monitoring, access control, and burglar
              alarms. These services work together to provide a comprehensive
              security solution that will keep your property and loved ones
              safe. Our remote monitoring service allows you to keep an eye on
              your property from anywhere, at any time, using your smartphone or
              computer. This means that you can check on your property even when
              you&apos;re away, giving you peace of mind.
            </p>

            <p>
              At FEE, we understand that the safety and security of your
              property is of the utmost importance. That&apos;s why we use only
              the highest quality equipment and materials in our installations.
              All of our CCTV systems are equipped with the latest technology,
              including high-resolution cameras and advanced recording
              capabilities. This ensures that your system will be able to
              capture clear and detailed footage, even in low light conditions.
            </p>

            <p>
              We also understand that cost is an important consideration for
              many of our clients. That&apos;s why we strive to provide our
              services at an affordable price. Our team will work with you to
              design a system that fits within your budget and meets your needs.
              We will also provide you with a free quote so you know exactly
              what to expect before we begin any work.
            </p>

            <p>
              In conclusion, FEE is a CCTV company with 4 years of experience in
              the field. We specialize in providing top-of-the-line security
              solutions for homes and businesses. Our team of experts are highly
              skilled and knowledgeable in all aspects of CCTV installation and
              maintenance. We take pride in our ability to deliver high-quality,
              reliable, and cost-effective services to our clients. Trust FEE to
              keep your property and loved ones safe.
            </p> */}
          </div>
        </div>
      </section>

      <section className='w-full h-full flex flex-col lg:flex-row'>
        <div className='bg-rose-800 text-gray-300 w-full lg:w-1/2 h-auto px-4 flex flex-col gap-2 py-5'>
          <span className='text-sm uppercase'>Cameras & Security Systems</span>
          <p className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100] lg:max-w-lg'>
            Experience, Expertise and Honesty
          </p>
          <p>
            With more than 102 sales and service centers across the world, Kanni
            has achieved a distinguished name in security & surveillance
            industry within a few years.
          </p>
          <div className='flex gap-1 justify-between'>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <Image
                className='w-16'
                src='https://kanni.wpengine.com/wp-content/uploads/2018/08/abt-ico1.png'
                width={100}
                height={100}
                alt=''
              />
              <span className='text-xs text-center uppercase'>
                HD Night Vision
              </span>
            </div>

            <div className='flex flex-col items-center gap-1 justify-center'>
              <Image
                className='w-16'
                src='https://kanni.wpengine.com/wp-content/uploads/2018/08/abt-ico2.png'
                width={100}
                height={100}
                alt=''
              />
              <span className='text-xs text-center uppercase'>
                360 Coverage
              </span>
            </div>

            <div className='flex flex-col items-center gap-1 justify-center'>
              <Image
                className='w-16'
                src='https://kanni.wpengine.com/wp-content/uploads/2018/08/abt-ico3.png'
                width={100}
                height={100}
                alt=''
              />
              <span className='text-xs text-center uppercase'>
                Motion Tracker
              </span>
            </div>
          </div>
          <button className='inline-flex items-center w-fit justify-center gap-1 btn btn-primary rounded-none bg-gray-300 border-gray-300 text-black active:bg-transparent hover:bg-rose-900 hover:border-rose-900 active:border-gray-300'>
            Protect My Home <AiOutlineArrowDown />
          </button>
        </div>

        <div className='w-full h-full lg:w-1/2'>
          <Image
            className='h-[25rem] w-full object-cover object-center'
            src='https://images.unsplash.com/photo-1520710525888-b1d4504b3583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
            width={1000}
            height={1000}
          />
        </div>

        <div className='bg-gray-300 text-rose-800 w-full lg:w-1/2 h-auto px-4 flex flex-col gap-2 py-5'>
          <span className='text-sm uppercase'>
            Houses and Business security
          </span>
          <p className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100] lg:max-w-lg'>
            Various Camera Systems Available
          </p>
          <p>
            Wireless CCTV systems to smart analytic CCTV, and from burglar
            alarms to remote video monitoring, SSAIB-regulated 24-7 CCTV
            Security Ltd protects businesses and homes.
          </p>
          <p>
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
          </p>
          <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
            View Products Here!
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
