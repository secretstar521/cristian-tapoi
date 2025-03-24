'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const shimmer = (
  w: number,
  h: number,
) => ` <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
  <linearGradient id="g">
    <stop stop-color="#fefefe36" offset="20%" />
    <stop stop-color="#fefefe36" offset="50%" />
    <stop stop-color="#fefefe36" offset="70%" />
  </linearGradient>
  <filter id="blur-effect">
    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
  </filter>
</defs>
<rect width="${w}" height="${h}" fill="#ffffff36" />
<rect id="r" width="${w}" height="${h}" fill="url(#g)" filter="url(#blur-effect)" />
<animate xlink:href="#r" attributeName="x" from="-100" to="100" dur="1s" repeatCount="indefinite" />
</svg>
`;

function SwiperCustom({ images }: { images: string[] }) {
  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={
        'w-full lg:w-[65%] h-[300px] md:h-[420px] lg:h-[500px] shadow-[1px_1px_15px_#bababdaa,1px_1px_10px_#2d2d2d90_inset] rounded-[6px] bg-transparent last:bottom-[-40px] last:child-span:w-[10px] last:child-span:h-[10px] last:child-span:shadow-[1px_1px_15px_#bababdaa]'
      }
      style={{ overflow: 'unset' }}
      navigation={true}
    >
      {images.map((image) => (
        <SwiperSlide
          key={image}
          className={
            'rounded-[6px] overflow-hidden text-center text-[18px] flex items-center justify-center relative aspect-auto'
          }
          style={{ aspectRatio: '16 / 9' }}
        >
          <Image
            fill
            src={image}
            alt=""
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperCustom;
