import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const ChooseUsCard = ({ data }: { data: { name: string } }) => {
  return (
    <li className='flex gap-1 justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-gray-300 border-opacity-[0.3] max-h-md  hover:text-black z-[100]'>
      <IoMdCheckmarkCircle />
      <span className='font-medium text-lg'>{data?.name}</span>
    </li>
  );
};

export default ChooseUsCard;
