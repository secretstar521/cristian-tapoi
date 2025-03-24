import React from 'react';
import Showcases from './Showcases';

function Projects() {
  return (
    <div
      className={'min-h-[100vh] px-[16px] md:px-[22px] lg:px-[52px] pt-[90px] lg:pt-[120px] pb-[50px] ga-[50px]'}
      style={{ background: 'linear-gradient(to top,#1d1d2a 70%, #0e0e14)' }}
    >
      <h2
        className="mx-auto text-[18px] md:text-[22px] lg:text-[24px] block mb-[25px] w-fit text-center"
        style={{ textShadow: '1px 1px 10px #ffffff9b' }}
      >
        Some of my work
      </h2>
      <Showcases />
    </div>
  );
}

export default Projects;
