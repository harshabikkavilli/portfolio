import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Professional experiences</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
					<div key={exp.id} className="relative flex items-start gap-6">
						{/* Timeline line connection */}
						<div className="absolute left-6 top-14 bottom-0 w-[2px] bg-black/20 dark:bg-white/60" />
            {/* Logo */}
            {exp.logo ? (
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
            ) : (
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-xs"
                style={{ backgroundColor: exp.logoColor, color: exp.textColor || 'white' }}
              >
                {exp.logoText}
              </div>
            )}
            
            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
              </div>
              
              <span className="inline-block px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-black rounded text-[10px] font-bold uppercase tracking-wider">
                {exp.duration}
              </span>
              
              <ul className="space-y-3 list-disc list-outside text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;