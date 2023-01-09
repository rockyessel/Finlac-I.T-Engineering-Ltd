import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleState = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className='z-[2] shadow-lg bg-gray-900 bg-opacity-[0.3] px-4 w-full h-auto fixed'>
      <div className='container mx-auto flex justify-between items-center w-full h-20 text-gray-300 '>
        <span className='font-bold text-3xl z-[2]'>
          FEE<span className='text-4xl text-red-500'>.</span>{' '}
        </span>

        <ul className='hidden md:flex gap-1'>
          <li>Home</li>
          <li>About</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>

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

        {showMenu && (
          <div className='transition-all duration-400 md:hidden bg-gray-900 bg-opacity-[0.9] flex justify-end items-center absolute top-0 left-0 w-full h-screen overflow-hidden'>
            <div className='flex flex-col pt-20 pl-5 items-start gap-8 bg-gray-900 w-[280px] h-screen'>
              <ul className='flex flex-col uppercase divide-gray-800 items-start gap-8 bg-gray-900 w-full h-full'>
                <li className='inline-flex justify-start items-center gap-2  hover:text-gray-500  duration-700 cursor-pointer w-full li text-center hover:border-none'>
                  <div>
                    <span className='font-extrabold text-gray-200'>01</span>.
                  </div>
                  Home
                </li>
                <li className='inline-flex justify-start  items-center gap-2 hover:text-gray-500 hover:font-medium  duration-700 cursor-pointer w-full li text-center hover:border-none'>
                  <div>
                    <span className='font-extrabold text-gray-200'>02</span>.
                  </div>
                  Portfolio
                </li>
                <li className='inline-flex justify-start  items-center gap-2 hover:text-gray-500 hover:font-medium  duration-700 cursor-pointer w-full li text-center hover:border-none'>
                  <div>
                    <span className='font-extrabold text-gray-200'>03</span>.
                  </div>
                  Thoughts
                </li>
                <li className='inline-flex justify-start  items-center gap-2 hover:text-gray-500 hover:font-medium  duration-700 cursor-pointer w-full li text-center hover:border-none'>
                  <div>
                    <span className='font-extrabold text-gray-200'>04</span>.
                  </div>
                  About
                </li>
                <li className='inline-flex justify-start  items-center gap-2 hover:text-gray-500 hover:font-medium  duration-700 cursor-pointer w-full li text-center hover:border-none'>
                  <div>
                    <span className='font-extrabold text-gray-200'>05</span>.
                  </div>
                  React out
                </li>
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
