import React from 'react';
import AccordionCard from '../accordion-card';

const Display = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='font-bold text-3xl'>High-Quality Safe and Secure Access</p>
      <span className='text-gray-500 font-extralight'>
        Keep safe your home with authorized personal safe and secure access
      </span>
      <p className='font-medium'>
        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
        venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo.
      </p>

      <div>
        <AccordionCard />
      </div>
    </div>
  );
};

export default Display;
