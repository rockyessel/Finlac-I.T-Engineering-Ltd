import React from 'react';
import { GiCctvCamera } from 'react-icons/gi';

interface Props {
  data: {
    title: string;
    description: string;
  };
}

const SolutionForYouCard: React.FC<Props> = ({ data }: Props): JSX.Element => {
  return (
    <li className='flex justify-center w-full md:max-w-md duration-700 transition-shadow items-center p-5 border-[0.3px] group border-rose-800 border-opacity-[0.3] max-h-md hover:bg-rose-800 hover:text-gray-300'>
      <div className='flex gap-5'>
        <div className='text-3xl group-hover:text-gray-300 text-rose-800'>
          <GiCctvCamera />
        </div>
        <div className=' flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <span className='font-medium text-lg'>{data?.title}</span>
            <span>{data?.description}</span>
          </div>
          <span className='group-hover:text-gray-300 text-rose-800 font-medium'>
            Read more {'>'}
          </span>
        </div>
      </div>
    </li>
  );
};

export default SolutionForYouCard;
