import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="space-y-6 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-sm text-text-main-light dark:text-text-main-dark hover:border-primary/50 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;