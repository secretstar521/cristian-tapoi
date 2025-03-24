import React from 'react';
import Icon from '../../Common/Icon';
import { expertise, familiarSkills, softSkills } from '../../../utils/data';

function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className="mx-auto text-[18px] md:text-[22px] lg:text-[24px] block mb-[25px] w-fit text-center"
        style={{ textShadow: '1px 1px 10px #ffffff9b' }}
      >
        My skills
      </h2>
      <div className="flex gap-4 justify-center flex-col lg:flex-row">
        <div
          className={
            'flex items-center justify-center rounded-[20px] bg-[#232331] py-[10px] px-[16px] shadow-[1px_1px_10px_#0000008b]'
          }
          style={{ transition: 'all .3s ease' }}
        >
          <Icon name="desktop" fill="none" stroke="currentColor" width={40} height={40} />
          <span className="ml-[10px] text-[16px]">Specialized in web Front-end</span>
        </div>

        <div
          className={
            'flex items-center justify-center rounded-[20px] bg-[#232331] py-[10px] px-[16px] shadow-[1px_1px_10px_#0000008b]'
          }
          style={{ transition: 'all .3s ease' }}
        >
          <Icon name="mobile" fill="none" stroke="currentColor" width={30} height={30} />
          <span className="ml-[10px] text-[14px]">Familiar with Mobile app development</span>
        </div>

        <div
          className={
            'flex items-center justify-center rounded-[20px] bg-[#232331] py-[10px] px-[16px] shadow-[1px_1px_10px_#0000008b]'
          }
          style={{ transition: 'all .3s ease' }}
        >
          <Icon name="api" fill="white" width={30} height={30} />
          <span className="ml-[10px] text-[14px]">Familiar with backend development</span>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-bold text-[18px]">Expertise:</h4>
        <div className="flex items-center gap-1 flex-wrap w-full lg:w-2/3">
          {expertise.map((skill) => (
            <div className="px-2 py-1 border rounded-[2px] border-[#363636b7] bg-[#232331]" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-bold text-[18px]">Familiar with:</h4>
        <div className="flex items-center gap-1 flex-wrap w-full lg:w-2/3">
          {familiarSkills.map((skill) => (
            <div className="px-2 py-1 border rounded-[2px] border-[#363636b7] bg-[#232331]" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-bold text-[18px]">Soft Skills:</h4>
        <div className="flex items-center gap-1 flex-wrap w-full lg:w-2/3">
          {softSkills.map((skill) => (
            <div className="px-2 py-1 border rounded-[2px] border-[#363636b7] bg-[#232331]" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
