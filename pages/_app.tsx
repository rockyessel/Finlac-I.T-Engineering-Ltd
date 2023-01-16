import Footer from '../components/footer';
import Navbar from '../components/navbar';
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NextNProgress color={'#d1d5db'} />
      <Navbar />
      <Component {...pageProps} />

      <Footer />
    </React.Fragment>
  );
}
