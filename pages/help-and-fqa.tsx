import React from 'react';
import { Hero } from '../components';

const HelpAndFAQ = () => {
  return (
    <React.Fragment>
      <Hero />
      <main className='px-4'>
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

        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-5'>
            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                What is CCTV and how does it work?
              </p>
              <p>
                CCTV stands for closed-circuit television and is a system of
                video cameras used for surveillance. These cameras capture
                footage which is then transmitted to a monitor or set of
                monitors for viewing.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                What are the benefits of CCTV?
              </p>
              <p>
                CCTV can be used to deter crime, monitor activity in and around
                a property, and provide evidence in the event of a crime. It can
                also be used for monitoring employee activity and for remote
                monitoring.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                How can I view footage from my CCTV system?
              </p>
              <p>
                Footage from CCTV cameras can be viewed on a monitor or set of
                monitors, or remotely via a computer or mobile device. Some
                systems also allow footage to be recorded and stored for future
                viewing.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                What types of CCTV cameras are available?
              </p>
              <p>
                There are many different types of CCTV cameras available,
                including dome cameras, bullet cameras, PTZ cameras, and IP
                cameras. Each type is designed for a specific purpose and
                environment.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                What is the difference between analog and digital CCTV?
              </p>
              <p>
                Analog CCTV uses analog signals to transmit footage, while
                digital CCTV uses digital signals. Analog systems are older and
                less advanced than digital systems, but they are also less
                expensive.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                How do I choose the right CCTV camera for my needs?
              </p>
              <p>
                The best CCTV camera for your needs will depend on the
                environment in which it will be used and the specific
                surveillance needs you have. Consider factors such as
                resolution, lens size, and weather resistance when making your
                decision.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                How much does CCTV installation cost?
              </p>
              <p>
                The cost of CCTV installation can vary depending on the number
                and type of cameras being installed, as well as the complexity
                of the installation. A basic system can cost anywhere from a few
                hundred dollars to several thousand dollars.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Do I need a permit to install CCTV cameras?
              </p>
              <p>
                This can vary depending on your location, but in most cases, you
                do not need a permit to install CCTV cameras on your own
                property. However, it is always best to check with local
                authorities to be sure.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                How do I maintain my CCTV system?
              </p>
              <p>
                Proper maintenance of your CCTV system is important to ensure
                that it continues to work correctly. This can include cleaning
                the lenses of the cameras, checking the connections, and
                ensuring that the system is running correctly.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                What is the storage capacity of CCTV cameras?
              </p>
              <p>
                The storage capacity of CCTV cameras can vary depending on the
                type of camera and the recording resolution. Some cameras have
                built-in storage, while others require an external storage
                device such as a DVR or NVR.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                What is the resolution of CCTV cameras?
              </p>
              <p>
                The resolution of CCTV cameras can vary, with the most common
                resolution being 1080p. However, there are also cameras
                available with higher resolutions such as 4K.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Can CCTV cameras be used in low light conditions?
              </p>
              <p>
                Some CCTV cameras have built-in infrared (IR) technology that
                allows them to capture footage in low light conditions.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Are CCTV cameras weatherproof?
              </p>
              <p>
                Not all CCTV cameras are weatherproof, but many are designed to
                be used in outdoor environments and are built to withstand
                varying weather conditions.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Can CCTV cameras be hacked?
              </p>
              <p>
                Yes, CCTV cameras can be hacked, just like any other connected
                device. To protect your system from hacking, ensure that you use
                a strong password, keep your software up to date, and use a
                secure network.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                How do I access my CCTV cameras remotely?
              </p>
              <p>
                To access your CCTV cameras remotely, you will need to connect
                your cameras to a network and configure remote access settings.
                This can be done through a web interface or a mobile app,
                depending on the system you are using. Some systems also require
                the use of a cloud service or VPN.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Can CCTV cameras be integrated with other smart devices?
              </p>
              <p>
                Yes, CCTV cameras can be integrated with other smart devices
                such as smart home systems and security systems. This allows for
                increased control and automation of your surveillance system.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Can CCTV cameras be used for facial recognition?
              </p>
              <p>
                Some CCTV cameras have facial recognition capabilities built-in,
                while others can be integrated with facial recognition software.
                However, use of facial recognition technology raises privacy
                concerns and is heavily regulated.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Can CCTV cameras be used for license plate recognition?
              </p>
              <p>
                Yes, CCTV cameras can be used for license plate recognition
                (LPR) through the integration of LPR software. This technology
                allows for the automatic reading and recording of license plate
                numbers.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                How do I backup footage from my CCTV cameras?
              </p>
              <p>
                Footage from CCTV cameras can be backed up to an external
                storage device such as a DVR or NVR, or to a cloud-based storage
                service. It is important to regularly backup footage to ensure
                it is not lost in case of equipment failure or other issues.
              </p>
            </div>

            <div className='max-w-md'>
              <p className='text-lg font-medium text-rose-800'>
                Are there any legal restrictions for using CCTV cameras?
              </p>
              <p>
                There are legal restrictions for using CCTV cameras in some
                countries, states and localities. It is important to be aware of
                any laws and regulations regarding CCTV usage in your area
                before installing a system.
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HelpAndFAQ;
