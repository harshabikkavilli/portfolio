import React from 'react';
import logo from '../assets/logoTransparent.png';
import { SocialLink } from '../types';

interface FooterProps {
  social: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ social }) => {
  return (
    <footer className="pt-20">
      <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 backdrop-blur-md border border-primary/20 dark:border-primary/10 px-12 py-24 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img 
            src={logo} 
            alt="Harsha Bikkavilli" 
            className="h-10 w-auto"
          />
          
          <div className="flex items-center gap-4">
            {social.map((link) => {
              const IconComponent = link.icon;
              
              return (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full border border-gray-200/50 dark:border-gray-200/50 flex items-center justify-center transition-all hover:opacity-90 hover:dark:border-white ${link.backgroundColor}`}
                  aria-label={link.platform}
                >
                  <IconComponent 
                    size={20} 
                    className={link.iconColor || 'text-white'} 
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;