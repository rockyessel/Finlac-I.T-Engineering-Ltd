import React from 'react';
import { useRouter } from 'next/router';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface Props {
  data: {
    question: string;
    answer: string;
  }[];
}

const AccordionCard = (props: Props) => {
  const [clicked, setClicked] = React.useState<number | null>(0 || null);

  const isTrue: string =
    useRouter().asPath.split('/')[1] === 'contact-us'
      ? 'grid grid-cols-1 md:grid-cols-2 gap-5 text-md  divide-y divide-rose-200 '
      : 'w-full flex divide-y divide-rose-200 flex-col gap-5 text-xl';

  console.log(isTrue);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <ul className={`${isTrue}`}>
      {props?.data?.map((data, index) => (
        <li key={index}>
          <button
            onClick={() => toggle(index)}
            className='w-full flex text-left justify-between'
          >
            <h1
              className={`hover:text-rose-800 font-medium ${
                clicked === index ? 'text-rose-800' : ''
              }`}
            >
              {data.question}
            </h1>
            <span>
              {clicked === index ? (
                <FaMinus
                  className={` ${clicked === index ? 'text-rose-800 ' : ''}`}
                />
              ) : (
                <FaPlus className={``} />
              )}
            </span>
          </button>
          {clicked === index ? (
            <div className={`text-lg`}>
              <p>{data.answer}</p>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default AccordionCard;
