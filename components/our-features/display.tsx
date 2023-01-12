import React from 'react';
import AccordionCard from '../accordion-card';

export interface AccordionProps {
  question: string;
  answer: string;
}

interface DisplayProps {
  title: string;
  abbre_title: string;
  sub_title: string;
  sub_description: string;
  description: string;
  accordion: AccordionProps[];
}

const Display = (props: DisplayProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='font-bold text-3xl'>{props?.sub_title}</p>
      <span className='text-gray-500 font-extralight'>
        {props?.sub_description}
      </span>
      <p className='font-medium'>{props?.description}</p>

      <div className='w-full flex flex-col group overflow-hidden'>
        <AccordionCard data={props?.accordion} />
      </div>
    </div>
  );
};

export default Display;
