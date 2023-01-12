import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface AccordionCardProps {
  data: { question: string; answer: string }[];
}

const AccordionCard = () => {
  const [clicked, setClicked] = React.useState<number | null>(0 || null);

  const data = [
    {
      question: 'Full Container Load',
      answer:
        'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
    },
    {
      question: 'Less-than Container Load',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam aut quo? Est voluptatum perspiciatis facere quisquam earum provident ex? A perspiciatis nostrum molestiae non quod expedita eum possimus aliquid.`,
    },
    {
      question: 'International imports)',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam aut quo? Est voluptatum perspiciatis facere quisquam earum provident ex? A perspiciatis nostrum molestiae non quod expedita eum possimus aliquid.`,
    },
    {
      question: 'International exports',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam aut quo? Est voluptatum perspiciatis facere quisquam earum provident ex? A perspiciatis nostrum molestiae non quod expedita eum possimus aliquid.`,
    },
  ];

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className='w-full flex flex-col group overflow-hidden'>
      <ul className='w-full flex divide-y flex-col gap-5'>
        {data?.map((data, index) => (
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
    </div>
  );
};

export default AccordionCard;
