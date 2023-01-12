import React from 'react';
import { GiCctvCamera } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Lists = (): JSX.Element => {
  const [_string, set_String] = React.useState<string>('ACS');

  const router = useRouter();

  const handleStringChange = (keyword: string) => {
    set_String(keyword);

    // Change URl without page refresh NEXT.JS or making the page start.
    router.push(
      {
        query: { feature: `${keyword}` },
      },
      undefined,
      { shallow: true }
    );

    set_String('');
  };

  return (
    <ul className='divide-y divide-gray-300 text-lg font-medium flex flex-col'>
      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('ACS')}
        >
          <GiCctvCamera /> <span>Access Control System</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('AS')}
        >
          <GiCctvCamera /> <span>Alarm System</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('RM')}
        >
          <GiCctvCamera /> <span>Record Movements</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('RVA')}
        >
          <GiCctvCamera /> <span>Retail Video Analytics</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('IPV')}
        >
          <GiCctvCamera /> <span>Ip Video</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('VV')}
        >
          <GiCctvCamera /> <span>Video Verifications</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('CM')}
        >
          <GiCctvCamera /> <span>Cloud Monitoring</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('DC')}
        >
          <GiCctvCamera /> <span>Door Controls</span>
        </button>
      </li>

      <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
        <button
          className='inline-flex items-center gap-1'
          onClick={() => handleStringChange('SPS')}
        >
          <GiCctvCamera /> <span>Smart Phone Security</span>
        </button>
      </li>
    </ul>
  );
};

export default Lists;
