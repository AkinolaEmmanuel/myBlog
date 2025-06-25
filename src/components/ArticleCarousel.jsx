import { useState, useEffect } from 'react';
import { ArticleCard } from './ArticleCards';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Reusable Carousel Section Component
export default function CarouselSection({ title, articles, category, onArticleClick }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const scrollContainer = (direction) => {
    const container = document.getElementById(`carousel-${title.replace(/\s+/g, '-')}`);
    const scrollAmount = 370; // Card width + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
    // Update button states after scroll
    setTimeout(() => updateScrollButtons(container), 300);
  };
  
  const updateScrollButtons = (container) => {
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };
  
  useEffect(() => {
    const container = document.getElementById(`carousel-${title.replace(/\s+/g, '-')}`);
    if (container) {
      const handleScroll = () => updateScrollButtons(container);
      container.addEventListener('scroll', handleScroll);
      updateScrollButtons(container);
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [title, articles]);
  
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full"></div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => scrollContainer('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border-2 transition-all ${
              canScrollLeft 
                ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white' 
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollContainer('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border-2 transition-all ${
              canScrollRight 
                ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white' 
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        id={`carousel-${title.replace(/\s+/g, '-')}`}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article, index) => (
          <ArticleCard 
            key={index} 
            article={article} 
            category={category}
            onClick={onArticleClick}
          />
        ))}
      </div>
    </section>
  );
}