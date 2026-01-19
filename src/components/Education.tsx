import { GraduationCap } from 'lucide-react';
import React from 'react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="space-y-8 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Education</h2>
      <div className="space-y-12 relative">
        {education.map((edu, index) => (
          <div key={edu.id} className="relative flex gap-6">
            {/* Timeline line connection */}
						<div className="absolute left-[14px] top-10 bottom-0 w-[2px] bg-black/20 dark:bg-white/60" />
            
            <div className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center mt-1 shrink-0">
              <GraduationCap size={16} className="text-gray-600 dark:text-gray-400" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
              <span className="inline-block px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-black rounded text-[10px] font-bold uppercase tracking-wider">
                Graduated: {edu.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;