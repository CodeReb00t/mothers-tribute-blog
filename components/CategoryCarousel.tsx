'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'Travels',
  'Foods',
  'Guides',
  'Stories',
  'Cities',
  'Countries',
  'Vlogs',
];

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(4); // Start with center item

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const item = container?.children[index] as HTMLElement;
    if (item && container) {
      container.scrollTo({
        left: item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < categories.length - 1) scrollToIndex(activeIndex + 1);
  };

  return (
    <section className="px-4 py-10 relative">
      {/* Header row with title and buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Explore by category</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-white text-black p-1 rounded-full shadow"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-black p-1 rounded-full shadow"
            disabled={activeIndex === categories.length - 1}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-40 h-40 rounded-md flex flex-col justify-center items-center text-white transition-all duration-300 ${
              index === activeIndex ? 'scale-110 bg-gray-700' : 'bg-black opacity-70'
            }`}
          >
            <div className="w-16 h-16 bg-gray-500 mb-2" />
            <span className="text-sm">{category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
