import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselSection from './ArticleCarousel';
import { mockArticles } from './mockarticle';

export default function HomeArticles() {
  const [articles, setArticles] = useState({
    'Philosophy and Psychology': [],
    'Scripture Thoughts': [],
    'Ideologies and Changes': [],
    'Rants': []
  });
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  
  
  useEffect(() => {
    const fetchScriptureThoughts = async () => {
      try {
        const response = await fetch('https://bible-api.com/Psalms 23');
        const data = await response.json();
        
        const scriptureWithIds = data.verses?.map((verse, index) => ({
          ...verse,
          id: `psalm-23-${verse.verse}`,
          title: `Psalm 23:${verse.verse}`,
          content: verse.text,
          date: 'Ancient Wisdom'
        })) || [];
        
        setArticles({
          'Philosophy and Psychology': mockArticles['Philosophy and Psychology'],
          'Scripture Thoughts': mockArticles['Scripture Thoughts'].concat(scriptureWithIds),
          'Ideologies and Changes': mockArticles['Ideologies and Changes'],
          'Rants': mockArticles['Rants']
        });
      } catch (error) {
        console.error('Error fetching scripture:', error);
        setArticles(mockArticles);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchScriptureThoughts();
  }, []);
  
  
  
    const handleArticleClick = (article, category) => {
      navigate(`/${article.id}`);
  };
  
  return (
    <div className="min-h-screen bg-white">  
      <div className="max-w-7xl mx-auto px-6 pt-12 2xl:py-12 2xl:my-12">
        <div className="text-center">
            <h1 className="font-bold text-3xl md:text-4xl py-2">My Library of Articles</h1>
            <p className='text-gray-900 text-justify lg:text-center'>These are my thoughts written and documented across philosophy, scripture, ideologies, and honest conversations.</p>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading articles...</p>
            </div>
          </div>
        ) : (
          Object.entries(articles).map(([category, categoryArticles]) => (
            <CarouselSection
              key={category}
              title={category}
              articles={categoryArticles}
              category={category}
              onArticleClick={(article) => handleArticleClick(article, category)}
            />
          ))
        )}
      </div>
    </div>
  );
}
