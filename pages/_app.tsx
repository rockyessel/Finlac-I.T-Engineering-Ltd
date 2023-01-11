import Footer from '../components/footer';
import Navbar from '../components/navbar';
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />

      <Footer />
    </React.Fragment>
  );
}
