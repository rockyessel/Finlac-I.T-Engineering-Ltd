import React from 'react';
import { Hero, ScreenButton, ServiceCard } from '../components';
import Header from '../components/header';

const Services = () => {
  return (
    <React.Fragment>
      <Header
        description={`FEE is a company that provides CCTV products and services for home and business surveillance. They have a team of experts who can help customers find the best solution for their needs, whether it's a single security camera or a comprehensive CCTV system.`}
        title={'Services We Provide'}
        image={'https://finlac-i-t-engineering-ltd.vercel.app/website.png'}
        type={'website'}
        url={''}
        alt={'FINLAC IT & ENG. LTD'}
        keywords={'cars,books,shoes,sex,bad,cats'}
        publishedAt={'2020-06-15T16:20:37+00:00'}
        updatedAt={'2020-06-15T16:20:37+00:00'}
        MIME={'png'}
        author_name={''}
      />
      <ScreenButton />
      <Hero />
      <main className='flex flex-wrap gap-10'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </main>
    </React.Fragment>
  );
};

export default Services;
