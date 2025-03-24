'use client';
import React from 'react';
import { useState } from 'react';
import { showcases } from '../../../utils/data';
import ShowcaseCard from '../../ShowcaseCard';

function Showcases() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const tabs = Array.from(new Set(showcases.map((item) => item.tag).flat()));
  const filtered_showcase =
    activeTab === 'All' ? showcases : showcases.filter((item) => item.tag.some((item) => item === activeTab));

  return (
    <>
      <div
        className={
          'hidden md:flex mb-[25px] mx-auto items-center gap-[25px] p-[20px] rounded-[20px] shadow-[1px_1px_15px_#00000066_inset] w-fit'
        }
      >
        <div
          onClick={() => setActiveTab('All')}
          className={`cursor-pointer p-[5px] hover:text-[#007bcb] text-[15px] lg:text-[18px] ${
            activeTab === 'All' ? 'text-[#007bcb] font-[600]' : 'text-white font-[500]'
          }`}
          style={{ transition: 'transition: all 0.3s ease' }}
        >
          All
        </div>

        {tabs?.map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}
            className={`cursor-pointer p-[5px] hover:text-[#007bcb] text-[15px] lg:text-[18px] ${
              activeTab === item ? 'text-[#007bcb] font-[600]' : 'text-white font-[500]'
            }`}
            style={{ transition: 'transition: all 0.3s ease' }}
          >
            {item.replaceAll('_', ' ')}
          </div>
        ))}
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'}>
        {filtered_showcase?.map((item) => (
          <ShowcaseCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Showcases;
