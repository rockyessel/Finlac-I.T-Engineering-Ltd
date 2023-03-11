import React from 'react';
import { GiCctvCamera } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { features } from 'process';

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
    // set_String(keyword);

    // Change URl without page refresh NEXT.JS or making the page start.
    router.push(
      {
        query: { feature: `${keyword}` },
      },
      undefined,
      { shallow: true }
    );
  };

  const feature = router?.query?.feature;

  const check = data?.abbrev || 'ACS';

  const if_true = feature === check;

  return (
    <li
      onClick={() => handleStringChange(`${data?.abbrev}`)}
      className={`w-full h-full inline-flex items-center gap-1 cursor-pointer hover:bg-rose-800 hover:text-gray-300 py-3 px-5 ${
        if_true ? 'text-rose-800' : ''
      }`}
    >
      <GiCctvCamera />
      <span>{data?.title}</span>
    </li>
  );
};

export default Lists;
