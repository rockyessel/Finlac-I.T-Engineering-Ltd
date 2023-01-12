import React from 'react';
import Lists from './lists';
import { useRouter } from 'next/router';
import ActiveDisplay from './active-display';

const OurFeatures = (): JSX.Element => {
  const list_data = [
    {
      title: 'Access Control System',
      abbrev:'ACS'
    },
    {
      title: 'Alarm System',
      abbrev:'AS'
    },
    {
      title: 'Record Movements',
      abbrev:'RM'
    },
    {
      title: 'Retail Video Analytics',
      abbrev:'RVA'
    },
    {
      title: 'IP Video',
      abbrev:'IPV'
    },
    {
      title: 'Video Verifications',
      abbrev:'VV'
    },
    {
      title: 'Cloud Monitoring',
      abbrev:'CM'
    },
    {
      title: 'Door Controls',
      abbrev:'DC'
    },
    {
      title: 'Smart Phone Security',
      abbrev:'SPS'
    },
  ];

  return (
    <div className='w-full flex justify-center gap-10'>
      <div className='max-w-md bg-gray-200 p-10'>
        <ul className='divide-y divide-gray-300 text-lg font-medium flex flex-col'>
          {list_data?.map((data, index) => (
            <Lists data={data} key={index} />
          ))}
        </ul>
      </div>

      <div className='md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl flex flex-col gap-10'>
        <ActiveDisplay />
      </div>
    </div>
  );
};

export default OurFeatures;
