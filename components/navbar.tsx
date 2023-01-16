import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleState = () => {
    setShowMenu((prev) => !prev);
  };

  const menuLink = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Services',
      url: '/services',
    },
    {
      name: 'Contact us',
      url: '/contact-us',
    },
  ];

  return (
    <div className='z-[200] shadow-lg bg-rose-800 px-4 w-full h-auto fixed'>
      <div className='container mx-auto flex justify-between items-center w-full h-20 text-gray-300 '>
        <span className='font-bold text-3xl z-[2]'>
          FEE<span className='text-4xl text-red-500'>.</span>{' '}
        </span>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-2 font-bold items-center'>
          {menuLink.map((link, index) => (
            <Link key={index} href={link?.url}>
              <li className='inline-flex justify-start items-center gap-2  hover:text-gray-500  duration-700 cursor-pointer w-full li text-center hover:border-none'>
                <div>
                  <span className='font-extrabold text-gray-200'>
                    0{index + 1}
                  </span>
                  .
                </div>
                {link?.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Menu Button */}
        {showMenu ? (
          <button
            type='button'
            title=''
            onClick={handleState}
            className='border px-3 py-3 hover:rounded-md hover:border-transparent hover:bg-gray-600 border-gray-600 md:hidden z-[10] inline-flex flex-col justify-center items-center'
          >
            <FaTimes className='text-2xl' />
            <span className='hidden md:block'>Close</span>
          </button>
        ) : (
          <button
            type='button'
            title=''
            onClick={handleState}
            className=' md:hidden z-[10] inline-flex flex-col justify-center items-center'
          >
            <div className='space-y-2 group'>
              <span className='block w-5 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
              <span className='block w-8 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
              <span className='block w-8 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
            </div>
            <span className='hidden md:block'>Menu</span>
          </button>
        )}
        {/* Mobile Menu */}
        {showMenu && (
          <div className='transition-all duration-400 md:hidden bg-rose-900 bg-opacity-[0.7] flex justify-end items-center absolute top-0 left-0 w-full h-screen overflow-hidden'>
            <div className='flex flex-col pt-20 pl-5 items-start gap-8 bg-rose-800 w-[280px] h-screen'>
              <ul className='flex flex-col uppercase divide-gray-800 items-start gap-8 bg-rose-800 w-full h-full'>
                {menuLink.map((link, index) => (
                  <Link key={index} href={link?.url}>
                    <li
                      onClick={handleState}
                      className='inline-flex justify-start items-center gap-2  hover:text-gray-500  duration-700 cursor-pointer w-full li text-center hover:border-none'
                    >
                      <div>
                        <span className='font-extrabold text-gray-200'>
                          0{index + 1}
                        </span>
                        .
                      </div>
                      {link?.name}
                    </li>
                  </Link>
                ))}
              </ul>

              <div>
                <ul className='flex flex-wrap justify-center text-gray-500 px-2 py-5  gap-2'>
                  <li className='hover:text-gray-300'>Facebook</li>
                  <li className='hover:text-gray-300'>Twitter</li>
                  <li className='hover:text-gray-300'>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
