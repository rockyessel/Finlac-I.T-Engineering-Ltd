import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/hero-section';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { GiCctvCamera } from 'react-icons/gi';
import AccordionCard from '../components/accordion-card';
import { OurFeatures } from '../components';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { ImCheckmark } from 'react-icons/im';

const Home = () => {
  return (
    <main className='text-black bg-gray-100 overflow-x-hidden pb-10'>
      <section className='fixed w-[100px] h-[100px] right-0 top-1/2 rotate-90 hidden md:flex md:gap-1 z-[101]'>
        <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:text-black active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
          Contact us now!
        </button>
        <button className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:text-black active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
          More About Us!
        </button>
      </section>
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

          <div className='flex flex-col md:flex-row gap-4'>
            <button className='inline-flex items-center  w-fit justify-center gap-1 btn btn-primary rounded-none bg-rose-800 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-rose-800'>
              Protect My Home <AiOutlineArrowDown />
            </button>
            <button className='btn btn-outline rounded-none w-fit  border-rose-800 text-black-300 active:bg-rose-800 hover:bg-rose-900'>
              Get A Quotes with us!
            </button>
          </div>
        </div>

        <div className='relative w-full h-full'>
          <div className='w-full h-[20rem] md:h-full before:block before:absolute before:bg-gray-100 before:h-32 before:w-64 before:z-[1] before:-rotate-[45deg] before:-top-[2.5rem] before:-left-[5.5rem] relative'>
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

      {/* <section className=' h-auto pt-10 flex flex-col gap-4 px-4 2xl:px-3'>
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
      </section> */}

      <section>
        <div>
          <p className='w-full md:text-start font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
            Solutions For Your Security
          </p>
          <p>
            Reduce the probability of crime happening on your property, it will
            reduce or eliminate any liability that falls on you if you can show
            you have solid with security systems in place.
          </p>
        </div>

        <div>
          <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center place-items-center'>
            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>Banking Sectors</span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>
                      Education Institute
                    </span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>Hospitality</span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>
                      City Public Area
                    </span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>Law Enforcement</span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>Transportation</span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>Real Estate</span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>
                      Telecom and Media
                    </span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>

            <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
              <div className='flex gap-5'>
                <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
                  <GiCctvCamera />
                </div>
                <div className=' flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-medium text-lg'>
                      Shoping & Retail
                    </span>
                    <span>
                      Nulla consequat massa quis enim. In enim justo, rhoncus
                      ut, imperdiet
                    </span>
                  </div>
                  <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
                    Read more {'>'}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='hidden h-full w-full md:flex md:items-center md:justify-center'>
        <section className='w-full'>
          <div>
            <p>Our Best Features</p>
          </div>
          <OurFeatures />
        </section>
      </section>

      <section className='w-screen bg-rose-800 text-gray-300 flex flex-col gap-10 py-10'>
        <div>
          <p className='w-full text-gray-300 md:text-start font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
            More Reasons to Choose Us!
          </p>

          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
              <IoMdCheckmarkCircle />
              <span className='font-medium text-lg'>Alarm Monitoring 24/7</span>
            </li>
            <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
              <IoMdCheckmarkCircle />
              <span className='font-medium text-lg'>Alarm Monitoring 24/7</span>
            </li>
            <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
              <IoMdCheckmarkCircle />
              <span className='font-medium text-lg'>Alarm Monitoring 24/7</span>
            </li>
            <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
              <IoMdCheckmarkCircle />
              <span className='font-medium text-lg'>Alarm Monitoring 24/7</span>
            </li>
            <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
              <IoMdCheckmarkCircle />
              <span className='font-medium text-lg'>Alarm Monitoring 24/7</span>
            </li>
            <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
              <IoMdCheckmarkCircle />
              <span className='font-medium text-lg'>Alarm Monitoring 24/7</span>
            </li>
          </ul>
        </div>

        <div className='w-full flex flex-col lg:flex-row justify-around gap-5'>
          <div className='max-w-lg divide-y divide-gray-400'>
            <div className='flex flex-col gap-5 pb-5'>
              <p className='text-2xl font-bold'>
                From Door And Window Sensors To Mobile Apps And Cameras System!
              </p>
              <p>
                Our security camera system installation department is just
                passionate about providing the best security system services and
                solutions you an ever find.
              </p>
              <div className='flex gap-4'>
                <button className='btn btn-primary rounded-none bg-gray-400 text-gray-50 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-gray-400'>
                  Check Products
                </button>
                <button className='btn btn-outline rounded-none border-gray-400 text-gray-300 active:bg-rose-800 hover:bg-rose-900 hover:border-gray-400'>
                  More About Us!
                </button>
              </div>
              <p>
                Whether you’re home or away, we make smart simple, have a remote
                access and control everything from lights, locks, and
                thermostats.
              </p>
            </div>
            <div className='flex gap-5 pt-5'>
              <div className='max-w-[16rem] flex flex-col gap-2'>
                <ImCheckmark className='text-2xl' />
                <p className='font-bold'>Increase Security Scope</p>
                <p>
                  Combining surveillance camera installation with guards lets
                  each guard view many areas.
                </p>
              </div>
              <div className='max-w-[16rem] flex flex-col gap-2'>
                <ImCheckmark className='text-2xl' />
                <p className='font-bold'>Reduce Business Liability</p>
                <p>
                  Professionally installed security camera systems keep an eye
                  on activity and eliminate downtime.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full md:max-w-2xl px-4 md:px-16 py-10 text-black bg-gray-300  relative before:block before:absolute before:bg-rose-800 before:h-32 before:w-[22rem] before:z-[1] before:rotate-[45deg] before:-top-[2.5rem] before:left-[30.5rem]'>
            <form className='flex flex-col gap-10'>
              <div className='max-w-md flex flex-col gap-2'>
                <p className='font-bold text-xl'>Request a quote</p>
                <p>
                  Please complete the form below, to request a quote, and we’ll
                  be in touch. Or you can call us{' '}
                  <span className='text-medium'>01061245741</span> and our
                  specialists will provide the necessary help!
                </p>
              </div>

              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col'>
                  <label>Used where:</label>
                  <select
                    title='options'
                    className='select select-bordered w-full md:w-[15rem] rounded-none'
                  >
                    <option value='For Home'>Home</option>
                    <option value='For Business'>Business</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label>Industry</label>
                  <select
                    title='options'
                    className='select select-bordered w-full md:w-[15rem] rounded-none'
                  >
                    <option value='commercial building'>
                      Commercial Building
                    </option>
                    <option value='manufacturing and logistics'>
                      Manufacturing & Logistics
                    </option>
                    <option value='Pharmaceutic & Biotech'>
                      Pharmaceutic & Biotech
                    </option>
                    <option value='Educational Buildings'>
                      Educational Buildings
                    </option>
                    <option value='Healthcare Buildings'>
                      Healthcare Buildings
                    </option>
                    <option value='Finance & Banking'>Finance & Banking</option>
                    <option value='Others'>Others</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col'>
                  <label>System Size</label>
                  <select
                    title={''}
                    name='option'
                    id=''
                    className='select select-bordered w-full md:w-[15rem] rounded-none'
                  >
                    <option value='Small (1-5 locations)'>
                      Small (1-5 locations)
                    </option>
                    <option value='Medium (6-10 locations)'>
                      Medium (6-10 locations)
                    </option>
                    <option value='Large (11-20 locations)'>
                      Large (11-20 locations)
                    </option>
                    <option value="I don't know">I don&apos;t Know</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label>Ownership</label>
                  <select
                    title={''}
                    name='option'
                    id=''
                    className='select select-bordered w-full md:w-[15rem] rounded-none'
                  >
                    <option value="I'm representing occupant">
                      I&apos;m representing occupant
                    </option>
                    <option value='I own the place'>I own the place</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col'>
                  <label>First Name</label>
                  <input
                    type='text'
                    placeholder='John'
                    className='input w-full rounded-none md:w-[15rem]'
                  />
                </div>

                <div className='flex flex-col'>
                  <label>Last Name</label>
                  <input
                    type='text'
                    placeholder='Doe'
                    className='input w-full rounded-none md:w-[15rem]'
                  />
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col'>
                  <label>Email Address</label>
                  <input
                    type='text'
                    placeholder='name@company.com'
                    className='input w-full rounded-none md:w-[15rem]'
                  />
                </div>

                <div className='flex flex-col'>
                  <label>Phone</label>
                  <input
                    type='text'
                    placeholder='0546813132'
                    className='input w-full rounded-none md:w-[15rem]'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
