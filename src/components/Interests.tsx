import React from 'react';

interface InterestsProps {
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">Interests</h2>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <span 
            key={interest}
            className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-sm text-text-main-light dark:text-text-main-dark hover:border-primary/50 transition-colors cursor-default"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Interests;