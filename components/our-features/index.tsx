import React from 'react';
import Lists from './lists';
import { useRouter } from 'next/router';
import ActiveDisplay from './active-display';

const OurFeatures = (): JSX.Element => {
  return (
    <div className='w-full flex justify-center gap-10'>
      <div className='max-w-md bg-gray-200 p-10'>
        <Lists />
      </div>

      <div className='md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl flex flex-col gap-10'>
        <ActiveDisplay />
      </div>
    </div>
  );
};

export default OurFeatures;
