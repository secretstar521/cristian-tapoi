import '../styles/globals.scss';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
