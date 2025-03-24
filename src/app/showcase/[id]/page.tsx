import React from 'react';
import { showcases } from '../../../utils/data';
import SwiperCustom from '../../../components/Swiper';
import Icon from '../../../components/Common/Icon';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Showcase',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Frontend',
    'Developer',
    'Frontend Developer',
    'Frontend Role',
    'Hire Frontend developer',
    'Frontend Engineer',
    'Frontend Project',
    'Frontend App',
  ],
};

export async function generateStaticParams() {
  const paths = showcases.map((item) => ({ id: item.id.toString() }));
  return paths;
}

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = showcases.find((item) => item.id === Number(id));

  return (
    <div
      style={{ background: 'linear-gradient(#1d1d2a 70%, #0e0e14)' }}
      className={'min-h-screen overflow-hidden px-[16px] md:px-[22px] pt-[85px] lg:pt-[140px] pb-[50px] lg:px-[52px]'}
    >
      <div className="lg:hidden text-[18px] flex items-center justify-start mb-[30px]">
        <Icon name="back" />
        <Link href="/showcase">
          <button className="">Back</button>
        </Link>
      </div>
      <SwiperCustom images={data?.images || []} />
      <div className={'flex flex-col items-start px-[10px] lg:px-[20px] mt-[40px] lg:mt-[100px]'}>
        <div className={'flex items-center gap-[10px] text-[16px]'}>
          <h5 className="m-0 text-[16px] md:text-[18px] lg:text-[22px]">{data?.role}</h5>

          <span className={data?.type}>{data?.type.replaceAll('_', ' ')}</span>
        </div>
        <div className={'flex items-center text-[42px] lg:text-[38px]'}>
          <h1 className="mt-[5px] mb-[12px]">{data?.title}</h1>
          {data?.website && (
            <a href={data?.website} target="_blank" title="View Website" className="text-[white] ml-[10px]">
              <Icon name="link" />
            </a>
          )}
        </div>

        <div className={'flex items-center gap-[10px] py-[10px]'}>
          {data?.tag.map((tag) => (
            <div key={tag} className={tag}>
              {tag.replaceAll('_', ' ')}
            </div>
          ))}
        </div>
        <p className="text-[18px] lg:text-[16px] mb-[12px] lg:mb-[22px] w-full lg:w-[90%]">{data?.description}</p>
        <ul className="flex flex-col gap-[10px] w-full lg:w-[90%]">
          {data?.myRole?.map((item, index) => (
            <li key={index} className="text-[18px] lg:text-[16px] flex items-start  gap-[8px]">
              <div className="w-[30px] h-[30px]">
                <Icon name="check" fill="#149a55" />{' '}
              </div>
              {item}
            </li>
          ))}
        </ul>

        <div className={'flex flex-col items-start my-[20px] w-full'}>
          <h2 className="mb-2">The technologies I used in this project:</h2>
          <ul className="pt-[20px] lg:pt-[5px] pb-[20px] flex items-center flex-wrap gap-[10px] list-none w-full lg:w-[90%]">
            {data?.technologies?.map((item) => (
              <li key={item} className="border border-[#bababd] rounded-[4px] py-[4px] px-[8px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
