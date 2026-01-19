import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { TestimonialItem } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setActiveIndex(Math.max(0, activeIndex - 1));
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1));
      }
    }
  };
  
  const scrollTo = (index: number) => {
      if (scrollContainerRef.current) {
          const { current } = scrollContainerRef;
          const width = current.offsetWidth;
          current.scrollTo({ left: width * index, behavior: 'smooth'});
          setActiveIndex(index);
      }
  }

  // Handle scroll events to update active index based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
       const { current } = scrollContainerRef;
       const index = Math.round(current.scrollLeft / current.offsetWidth);
       if (index !== activeIndex) {
           setActiveIndex(index);
       }
    }
  };

  return (
    <section id="testimonials" className="space-y-6 py-6">
      <h2 className="text-3xl font-bold tracking-tight text-center text-text-main-light dark:text-text-main-dark">Testimonials</h2>
      <div className="relative max-w-5xl mx-auto px-0 md:px-4 group">
        
        {/* Carousel Container */}
        <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x no-scrollbar w-full pb-8"
        >
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-full w-full flex-shrink-0 snap-center px-4 md:px-4 flex justify-center">
              <div className="bg-white dark:bg-card-dark p-5 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl relative overflow-hidden flex flex-col justify-between w-full max-w-3xl">
                <Quote className="absolute top-0 left-0 w-12 h-12 md:w-32 md:h-32 text-gray-100 dark:text-zinc-800 opacity-50 rotate-180 transition-all" strokeWidth={1} />
                
                <div className="relative z-10 space-y-6 md:space-y-8">
                  <p className="text-base md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed italic break-words">
                    "{t.text}"
                  </p>
                  
                  <div className="pt-6 md:pt-8 border-t border-gray-100 dark:border-zinc-800 flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <User size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base md:text-lg text-text-main-light dark:text-text-main-dark break-words">{t.author}</p>
                      <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold break-words">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Adjusted positioning */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 items-center justify-center shadow-lg text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-black transition-all z-20 group-hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={activeIndex === 0}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 items-center justify-center shadow-lg text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-black transition-all z-20 group-hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={activeIndex === testimonials.length - 1}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-2 md:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === idx 
                  ? 'bg-primary' 
                  : 'bg-gray-300 dark:bg-zinc-700 hover:bg-primary'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;