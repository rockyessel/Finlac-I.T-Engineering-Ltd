import React from 'react';
import { GiCctvCamera } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  data: {
    title: string;
    abbrev: string;
  };
}

const Lists = ({ data }: Props): JSX.Element => {
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
    <li className='cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5'>
      <button
        className='inline-flex items-center gap-1'
        onClick={() => handleStringChange(`${data?.abbrev}`)}
      >
        <GiCctvCamera /> <span>{data?.title}</span>
      </button>
    </li>
  );
};

export default Lists;
