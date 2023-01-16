import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaQuoteLeft,
} from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const testimonialsInfo = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        image: '/glo.jpg',
      },
      body: `I recently used the CCTV website and was extremely impressed with the level of security and functionality. The live streaming footage was crystal clear and the mobile access feature made it easy to check in on my property from anywhere. I highly recommend this website to anyone in need of CCTV services.`,
    },
    {
      id: 2,
      user: {
        name: 'Michael Johnson',
        image: '/assets/home.jpg',
      },
      body: `The CCTV website has been a game-changer for my business. The ability to monitor my premises remotely has greatly improved security and peace of mind." - Jane Smith
"The customer service I received from the CCTV website was outstanding. They were able to customize the system to my specific needs and were always available to answer any questions`,
    },
    {
      id: 3,
      user: {
        name: 'Sarah Davis',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website has exceeded my expectations. The live streaming feature is a fantastic addition, and the ability to access footage from my mobile device is a huge plus.`,
    },
    {
      id: 4,
      user: {
        name: 'Jessica Martinez',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website offers a comprehensive and user-friendly platform for monitoring my property. I highly recommend it.`,
    },
    {
      id: 5,
      user: {
        name: 'Mark Robinson',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website is a great tool for keeping an eye on my property. The footage is clear and the mobile access feature is very convenient.`,
    },
    {
      id: 6,
      user: {
        name: 'Anthony Rodriguez',
        image: '/assets/port.jpg',
      },
      body: `I was hesitant to use a CCTV website, but I am glad I did. The service is top-notch and the customer support is excellent.`,
    },
    {
      id: 7,
      user: {
        name: 'Susan Taylor',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website is a must-have for any property owner. The level of security and functionality it provides is unbeatable.`,
    },
    {
      id: 8,
      user: {
        name: ' Kevin Johnson',
        image: '/assets/port.jpg',
      },
      body: `I am very impressed with the CCTV website. The live streaming feature is a great addition and the customer support is top-notch.`,
    },
    {
      id: 9,
      user: {
        name: 'Sarah Davis',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website has exceeded my expectations. The live streaming feature is a fantastic addition, and the ability to access footage from my mobile device is a huge plus.`,
    },
    {
      id: 10,
      user: {
        name: 'Sarah Davis',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website has exceeded my expectations. The live streaming feature is a fantastic addition, and the ability to access footage from my mobile device is a huge plus.`,
    },
    {
      id: 11,
      user: {
        name: 'Stephanie Garcia',
        image: '/assets/port.jpg',
      },
      body: `The CCTV website is a great tool for maintaining the security of my property. The live streaming feature is very useful, and the mobile access feature is a huge plus`,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState<number>(1);

  const testimonialLength = testimonialsInfo.length;
  const repeat =
    currentTestimonial === testimonialLength ? 1 : currentTestimonial + 1;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(repeat);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentTestimonial, repeat]);

  const handleMoveDot = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className={`px-4`}>
      <div className={`text-[10rem] text-gray-300`}>
        <FaQuoteLeft />
      </div>

      <div>
        <p className={`uppercase`}>what people are saying</p>
      </div>

      <div>
        <p className={`text-[3rem]`}>Testimonials</p>
      </div>

      <div className={`flex flex-col gap-2.5`}>
        {testimonialsInfo.map(
          (testimonial, index) =>
            testimonial.id === currentTestimonial && (
              <div key={index} className={`ease-in-out duration-500`}>
                <p className={`text-[1.3rem] w-full h-fit pb-4`}>
                  {testimonial.body}
                </p>
                <div>
                  <p className={`text-[1.3rem]`}>{testimonial.user.name}</p>
                </div>
              </div>
            )
        )}

        <div className={'hidden md:flex gap-3 '}>
          {Array.from({ length: testimonialLength }).map((dot, index) => {
            return (
              <i
                key={index}
                onClick={() => handleMoveDot(index + 1)}
                className={`${
                  currentTestimonial === index + 1
                    ? 'w-[3rem] h-2  bg-blue-500'
                    : ''
                } w-[3rem] h-1  bg-gray-200`}
              />
            );
          })}
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Testimonials;
