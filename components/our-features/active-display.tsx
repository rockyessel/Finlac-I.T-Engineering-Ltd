import React from 'react';
import AccordionCard from '../accordion-card';
import { useRouter } from 'next/router';
import { SiHandshake } from 'react-icons/si';
import Display from './display';

const data = [
  {
    title: 'Access Control System',
    abbre_title: 'ACS',
    sub_title: 'Safety in your Surroundings',
    sub_description: 'Where Caution Blends with Technology!',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Surveillance Scam Kit',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'CCTV Design House',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Counting Technology',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Smart Clamp Claws',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Alarm System',
    abbre_title: 'AS',
    sub_title: 'Stay Secured from Fire Harms',
    sub_description:
      'Fire alarm technology will keep your family safe, no matter what happens',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Automatic Detection',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Reducing False Alarms',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Record Movements',
    abbre_title: 'RM',
    sub_title: 'Protect Your Home From Anywhere',
    sub_description: 'Monitor your home from anywhere and anytime',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Centralized Control Panel',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Surveillance Monitoring',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Video Analysis',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Retail Video Analytics',
    abbre_title: 'RVA',
    sub_title: 'Enhance Your Customer Experience',
    sub_description:
      'Track and analyze buying behavior of each buyer with video analytics system',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Customer Enter/Exit Counts',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Mapping Customer Journeys',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Identifying Store Performance',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Event Based Analysis',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'IP Video',
    abbre_title: 'IPV',
    sub_title: 'Protect Your Home From Anywhere',
    sub_description:
      'Monitor and record video remotely with awesome IP network',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Local File Storage',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Remote Video Monitoring',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Mobile Monitoring',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Secure Wireless Transmission',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Video Verifications',
    abbre_title: 'VV',
    sub_title: 'Enhance Your Customer safety',
    sub_description:
      'Install real-time video verification and protect your consumers, selling, and profits.',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Greater Customer Safety',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Fact-Based Responses',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'False Alarm Reduction',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Videofied System',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Cloud Monitoring',
    abbre_title: 'CM',
    sub_title: 'Easily Monitor the Dynamic Environments',
    sub_description:
      'Easily evaluate and monitor cloud-based services and applications',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Proactive Detection',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Proactive Detection',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Global Visibility',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Customized Alerts',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Door Controls',
    abbre_title: 'DC',
    sub_title: 'High-Quality Safe and Secure Access',
    sub_description:
      'Keep safe your home with authorized personal safe and secure access',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Real-Time Notification',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Key- Less Electric Lock',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Card And PIN Option',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Bio-Metric Fingerprint Option',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
  {
    title: 'Smart Phone Security',
    abbre_title: 'SPS',
    sub_title: 'Keep your house close, anywhere you are',
    sub_description:
      'Monitor and control your home’s devices with enhanced smartphone accessibility',
    description:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    accordion: [
      {
        question: 'Complete Wireless Technology',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Control On Unauthorized Use',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Evaluate The Power Consumption',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
      {
        question: 'Ease Of Installation',
        answer:
          'For those that do not know what (FCL) entails. The FCL is a type of shipment where a cargo fill out or occupies the space of the container.',
      },
    ],
  },
];

const ActiveDisplay: React.FC = (): JSX.Element => {
    
  const router = useRouter();

  const { feature } = router?.query;

  const check = feature || 'ACS';

  const filtered_data = data.filter((data) => data.abbre_title === check)[0];

  switch (check) {
    case `${check}`:
      return <Display {...filtered_data} />;

    default:
      return (
        <main className='w-full flex justify-center items-center'>
          <SiHandshake />
        </main>
      );
  }
};

export default ActiveDisplay;
