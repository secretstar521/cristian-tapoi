import React from 'react';
import Hero from '../components/UI/Home/Hero';
import About from '../components/UI/Home/About';
import Skills from '../components/UI/Home/Skills';
import Companies from '../components/UI/Home/Companies';
import Projects from '../components/UI/Home/Projects';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <main className={'w-full h-full'}>
        <Hero />
        <div className="px-[16px] flex flex-col gap-12 py-[12px] md:px-[22px] lg:px-[52px] bg-[#0e0e14] m-0">
          {/* about me paragraph */}
          <About />

          {/* my skills */}
          <Skills />

          {/* companies i have worked with */}
          {/* <Companies /> */}

          {/* <div className="flex flex-col justify-center items-center">
            <h2
              className="mx-auto text-[18px] md:text-[22px] lg:text-[24px] block mb-[25px] w-fit text-center"
              style={{ textShadow: '1px 1px 10px #ffffff9b' }}
            >
              Founded by ME
            </h2>

            <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-[65%] border rounded-[10px] overflow-hidden border-[#b5b4b471]">
              <div className="w-full lg:w-1/2 relative" style={{ aspectRatio: '16 / 9' }}>
                <Image src="/dashboard1.webp" alt="Penny Pulse" fill priority />
              </div>
              <div className="w-full lg:w-1/2 px-4 py-8 flex flex-col justify-center">
                <a href="https://pennypulse.net" target="_blank" className="underline text-[24px] font-bold">
                  Penny Pulse
                </a>
                <p>
                  Penny Pulse is a platform that helps users to track their expenses and income. It also helps users to
                  set budgets and track their spending habits. it shows user's financial health and is integrated with
                  AI to give users financial advice and personalized recommendations.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* projects i have worked on */}
        <Projects />
      </main>
    </>
  );
};

export default Page;
