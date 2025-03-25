import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TextWithBackground from '../../Common/TextWithBg';
import Icon from '../../Common/Icon';

function Hero() {
  return (
    <section
      className={
        'flex flex-col lg:flex-row items-center justify-center py-[85px] md:px-[22px] px-[16px] lg:p-6 h-[80vh] lg:h-screen'
      }
      style={{ background: 'linear-gradient(#1d1d2a 70%, #0e0e14)' }}
    >
      {/* <div
        className={
          'rounded-[50%] mb-[30px] lg:mb-0 lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] overflow-hidden border border-white flex items-center justify-center border-slid'
        }
      >
        <div className="overflow-hidden relative rounded-[50%] w-[97%] h-[97%] border border-solid border-white">
          <Image draggable={false} src="/images/profile.webp" fill alt={'Sam Avatar'} />
        </div>
      </div> */}

      <div className={'lg:ml-[40px] flex flex-col items-center lg:items-start'}>
        <h1 className="text-[34px] lg:text-[78px] lg:mb-[3px]">I am Cristian Tapoi,</h1>
        <TextWithBackground className="text-[34px] lg:text-[78px]">
          <h1>A Software Engineer.</h1>
        </TextWithBackground>
        <p className="mt-[10px] text-[16px] lg:text-[32px] w-fit">Building the Future, One Pixel at a Time</p>

        <div className={'flex flex-col lg:flex-row items-center gap-[25px] px-0 py-[30px]'}>
          <div className="flex items-center gap-[20px]">
            <Link
              href={'mailto:cristiantapoi6@gmail.com'}
              target="_blank"
              className={
                'bg-[#f92809] text-white font-bold text-decoration-none py-[.5rem] px-[1rem] md:py-3 md:px-6 rounded-lg transform transition-all shadow-[0_1px_2px_#f9290960] duration-300 ease-in-out hover:shadow-[0_4px_10px_#f929099a] text-[14px] md:text-[16px] hover:-translate-y-[3px] translate-y-0'
              }
            >
              Contact Me
            </Link>
            <Link
              href={'/Cristian.pdf'}
              target="_blank"
              className={
                'bg-[#007bcb] text-white font-bold text-decoration-none py-[.5rem] px-[1rem] md:py-3 md:px-6 rounded-lg transform transition-all shadow-[0_1px_2px_#007acb5e] duration-300 ease-in-out hover:shadow-[0_4px_10px_#007acba0] text-[14px] md:text-[16px] hover:-translate-y-[3px] translate-y-0'
              }
            >
              My Resume
            </Link>
          </div>
          <div className={'flex items-center gap-[20px]'}>
            <a
              href="https://github.com/deliteser112/"
              target="_blank"
              className="flex items-center justify-center text-white"
            >
              <Icon name="github" width={30} height={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-tapoi/"
              target="_blank"
              className="flex items-center justify-center text-white"
            >
              <Icon name="linkedin" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
