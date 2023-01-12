import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface Props {
  data: {
    question: string;
    answer: string;
  }[];
}

const AccordionCard = (props: Props) => {
  const [clicked, setClicked] = React.useState<number | null>(0 || null);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <ul className='w-full flex divide-y flex-col gap-5'>
      {props?.data?.map((data, index) => (
        <li key={index}>
          <button
            onClick={() => toggle(index)}
            className='w-full flex items-center justify-between'
          >
            <h1
              className={`hover:text-rose-800 font-extrabold text-xl ${
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
