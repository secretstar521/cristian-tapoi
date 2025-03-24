import Image from 'next/image';
import React from 'react';
import { logos } from '../../../utils/data';

function Companies() {
  return (
    <div className="flex flex-col mt-10 gap-4 justify-center">
      <h2
        className="mx-auto text-[18px] md:text-[22px] lg:text-[24px] block mb-[25px] w-fit text-center"
        style={{ textShadow: '1px 1px 10px #ffffff9b' }}
      >
        Some of the companies I've worked with...
      </h2>
      <div className={'w-full flex items-center overflow-x-scroll lg:gap-[20px] gap-[14px] m-0 bg-[#0e0e14]'}>
        {logos.map((src) => (
          <Image
            key={src}
            className="rounded-[6px] w-[90px] h-[90px] lg:h-[120px] lg:w-[120px]"
            style={{ filter: 'grayscale(3)' }}
            src={`/images/companies/${src}`}
            alt={src}
            width={120}
            height={120}
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
