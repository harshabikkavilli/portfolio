import React from 'react';
import { HeroData } from '../types';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-gray-200 dark:bg-zinc-800">
          <img 
            src={data.image} 
            alt={`${data.name} Portrait`} 
            className="object-cover w-full h-full"
            loading="eager"
          />
        </div>
      </div>
      <div className="md:col-span-7 space-y-6">
        <div>
          <h1 className="text-5xl md:text-6xl heading-serif mb-2 text-text-main-light dark:text-text-main-dark">{data.name}</h1>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-400">{data.role}</p>
        </div>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default Hero;