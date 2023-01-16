import React from 'react';
import { Hero, AccordionCard, ScreenButton } from '../components';
import { MdOutlineMapsHomeWork, MdPhoneCallback } from 'react-icons/md';

const ContactUs = () => {
  const contact_data = [
    {
      name: 'Location',
      info: [
        {
          items_one: '3333 Ghana, P.O.Box 323',
          items_two: 'Tema Community',
        },
      ],
    },
    {
      name: 'Telephone',
      info: [
        {
          items_one: '+233 54 488 9095',
          items_two: '+233 59 419 2035',
        },
      ],
    },
    {
      name: 'Email',
      info: [
        {
          items_one: 'info@fee.cominfo@fee.com',
          items_two: '',
        },
      ],
    },
    {
      name: 'Business Hours',
      info: [
        {
          items_one: 'Mon - Fri:8:00 to 21:00',
          items_two: 'Sat:9:00 to 17:00',
        },
      ],
    },
  ];

  const help_data: { question: string; answer: string }[] = [
    {
      question: 'What is CCTV and how does it work?',
      answer: `CCTV stands for closed-circuit television and is a system of video cameras used for surveillance. These cameras capture footage which is then transmitted to a monitor or set of monitors for viewing.`,
    },
    {
      question: 'What types of CCTV cameras are available?',
      answer: `There are many different types of CCTV cameras available, including dome cameras, bullet cameras, PTZ cameras, and IP cameras. Each type is designed for a specific purpose and environment.`,
    },
    {
      question: 'How much does CCTV installation cost?',
      answer: `The cost of CCTV installation can vary depending on the number and type of cameras being installed, as well as the complexity of the installation. A basic system can cost anywhere from a few hundred dollars to several thousand dollars.`,
    },
    {
      question: 'What is the storage capacity of CCTV cameras?',
      answer: `The storage capacity of CCTV cameras can vary depending on the type of camera and the recording resolution. Some cameras have built-in storage, while others require an external storage device such as a DVR or NVR.`,
    },
    {
      question: 'Are CCTV cameras weatherproof?',
      answer: `Not all CCTV cameras are weatherproof, but many are designed to be used in outdoor environments and are built to withstand varying weather conditions.`,
    },
    {
      question: 'What are the benefits of CCTV?',
      answer: `CCTV can be used to deter crime, monitor activity in and around a property, and provide evidence in the event of a crime. It can also be used for monitoring employee activity and for remote monitoring.`,
    },
    {
      question: 'What is the difference between analog and digital CCTV?',
      answer: `Analog CCTV uses analog signals to transmit footage, while digital CCTV uses digital signals. Analog systems are older and less advanced than digital systems, but they are also less expensive.`,
    },
    {
      question: 'Do I need a permit to install CCTV cameras?',
      answer: `This can vary depending on your location, but in most cases, you do not need a permit to install CCTV cameras on your own property. However, it is always best to check with local authorities to be sure.`,
    },
    {
      question: 'What is the resolution of CCTV cameras?',
      answer: `The resolution of CCTV cameras can vary, with the most common resolution being 1080p. However, there are also cameras available with higher resolutions such as 4K.`,
    },
    {
      question: 'Can CCTV cameras be hacked?',
      answer: `Yes, CCTV cameras can be hacked, just like any other connected device. To protect your system from hacking, ensure that you use a strong password, keep your software up to date, and use a secure network.`,
    },
    {
      question: 'Can CCTV cameras be used for facial recognition?',
      answer: `Some CCTV cameras have facial recognition capabilities built-in, while others can be integrated with facial recognition software. However, use of facial recognition technology raises privacy concerns and is heavily regulated.`,
    },
    {
      question: 'Can CCTV cameras be used for facial recognition?',
      answer: `Some CCTV cameras have facial recognition capabilities built-in, while others can be integrated with facial recognition software. However, use of facial recognition technology raises privacy concerns and is heavily regulated.`,
    },
    {
      question: 'Are there any legal restrictions for using CCTV cameras?',
      answer: `There are legal restrictions for using CCTV cameras in some countries, states and localities. It is important to be aware of any laws and regulations regarding CCTV usage in your area before installing a system.`,
    },
    {
      question: 'How can I view footage from my CCTV system?',
      answer: `Footage from CCTV cameras can be viewed on a monitor or set of monitors, or remotely via a computer or mobile device. Some systems also allow footage to be recorded and stored for future viewing.`,
    },
    {
      question: 'How do I choose the right CCTV camera for my needs?',
      answer: `The best CCTV camera for your needs will depend on the environment in which it will be used and the specific surveillance needs you have. Consider factors such as resolution, lens size, and weather resistance when making your decision.`,
    },
    {
      question: 'How do I maintain my CCTV system?',
      answer: `Proper maintenance of your CCTV system is important to ensure that it continues to work correctly. This can include cleaning the lenses of the cameras, checking the connections, and ensuring that the system is running correctly.`,
    },
    {
      question: 'Can CCTV cameras be used in low light conditions?',
      answer: `Some CCTV cameras have built-in infrared (IR) technology that allows them to capture footage in low light conditions.`,
    },
    {
      question: 'How do I access my CCTV cameras remotely?',
      answer: `To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.To access your CCTV cameras remotely, you will need to connect your cameras to a network and configure remote access settings. This can be done through a web interface or a mobile app, depending on the system you are using. Some systems also require the use of a cloud service or VPN.`,
    },
    {
      question: 'Can CCTV cameras be used for license plate recognition?',
      answer: `Yes, CCTV cameras can be used for license plate recognition (LPR) through the integration of LPR software. This technology allows for the automatic reading and recording of license plate numbers.`,
    },
  ];

  return (
    <div className='w-full h-full flex flex-col gap-10 mb-5'>
      <ScreenButton />
      <Hero />
      <section className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center gap-5 px-4'>
        {contact_data?.map((data, index) => (
          <div
            key={index}
            className='bg-gray-50 p-5 flex flex-col gap-2 h-full md:w-[20rem] w-full md:h-[10rem] text-lg hover:bg-rose-800 hover:text-gray-300 px-5 py-4'
          >
            <span>
              <MdOutlineMapsHomeWork className='text-3xl' />
            </span>
            <p className='font-bold'>{data?.name}</p>
            <div className='flex flex-col'>
              {data?.info?.map((info, index) => (
                <div className='flex flex-col gap-1 text-light' key={index}>
                  <span>{info?.items_one}</span>
                  <span>{info?.items_two}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className='px-4 flex flex-col md:flex-row'>
        <div className='bg-rose-800 px-4 py-2 text-gray-300 max-w-xl'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100] lg:max-w-lg'>
              Enjoy Peace Of Mind With Our Unique And Smart Systems.
            </p>

            <p>
              We will design, install, and upgrade solutions to meet business
              specific needs and budgets from large.
            </p>
          </div>

          <div>
            <p>Service Technician</p>

            <p>
              For anything tech related you want knowledge of, you can call this
              number,and you&apos;re get sorted out nicely.
            </p>

            <p className='flex items-center text-xl gap-1 bg-gray-300 text-rose-800 font-bold p-2 w-fit'>
              <MdPhoneCallback />
              <span>+233 54 488 9095</span>
            </p>
          </div>
        </div>

        <div className='px-4 py-2 flex flex-col gap-5'>
          <div>
            <p className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100] lg:max-w-lg text-rose-800'>
              Get In Touch
            </p>
            <p>
              We take great pride in everything that we do, control over
              products allows us to ensure our customers receive the best
              quality service.
            </p>
          </div>
          <form className='flex flex-col gap-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label>Full name</label>
                <input
                  className='input input-bordered rounded-none w-full'
                  title='full name'
                  type='text'
                />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label>Email</label>
                <input
                  className='input input-bordered rounded-none w-full'
                  title='full name'
                  type='text'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label>Phone</label>
                <input
                  className='input input-bordered rounded-none w-full'
                  title='full name'
                  type='text'
                />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label>Select Your Services</label>
                <select
                  title='options'
                  className='select select-bordered rounded-none w-full'
                >
                  <option value='commercial building'>
                    Commercial Building
                  </option>
                  <option value='manufacturing and logistics'>
                    Manufacturing & Logistics
                  </option>
                  <option value='Pharmaceutic & Biotech'>
                    Pharmaceutic & Biotech
                  </option>
                  <option value='Educational Buildings'>
                    Educational Buildings
                  </option>
                  <option value='Healthcare Buildings'>
                    Healthcare Buildings
                  </option>
                  <option value='Finance & Banking'>Finance & Banking</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label>Additional Details</label>
              <textarea
                className='textarea textarea-bordered rounded-none'
                placeholder='Type here'
              />
            </div>

            <div>
              <button
                type='submit'
                className='btn btn-primary rounded-none bg-rose-800 border-rose-800 active:bg-transparent hover:bg-rose-900 hover:border-rose-800'
              >
                Subject request
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className='px-4 flex-col gap-4'>
        <section>
          <p className='text-xl w-full md:text-2xl lg:text-3xl font-bold z-[100] lg:max-w-lg'>
            Here are some FAQs to help you.
          </p>
          <p>
            Whether it&apos;s protecting your possessions while you are on
            vacation or your family while they sleep, we will give you the peace
            of mind that should the worst happen.
          </p>
        </section>

        <section className=''>
          <AccordionCard data={help_data} />
        </section>
      </section>
    </div>
  );
};

export default ContactUs;
