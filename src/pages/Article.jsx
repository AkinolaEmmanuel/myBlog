
// pages/Article.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, Share2, Bookmark, Heart } from 'lucide-react';
import { fullArticles } from '../components/mockarticle';
import { categoryData } from "../components/ArticleCards";
import toast from 'react-hot-toast';

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Get article from fullArticles
  const article = fullArticles[id];
  const relatedArticle = fullArticles[article?.relatedId];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4"> Oops! Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or is still in production.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }
  
  const categoryInfo = categoryData[article.category] || categoryData['Scripture Thoughts'];
    const relatedCategoryInfo = categoryData[relatedArticle?.category] || categoryData['Scripture Thoughts'];
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast('Link copied to clipboard!');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="font-medium">Back to articles</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all"
                title="Share article"
              >
                <Share2 size={20} />
              </button>
              {/* <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all">
                <Bookmark size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-all">
                <Heart size={20} />
              </button> */}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className={`h-80 bg-gradient-to-br ${categoryInfo.color} flex items-center justify-center relative`}>
            <span className="text-9xl opacity-20">{categoryInfo.icon}</span>
            <div className="absolute bottom-8 left-8">
              <span className={`${categoryInfo.bgColor} ${categoryInfo.textColor} px-4 py-2 rounded-full font-medium text-sm`}>
                {article.category}
              </span>
            </div>
            
            {/* Floating stats */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Article Header */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 border-l-4 border-gray-900 pl-6 italic">
              {article.excerpt}
            </p>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12 p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                EA
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Emmanuel Akinola Tijesunimi</h3>
                <p className="text-gray-600">Writer, Thinker</p>
              </div>
            </div>
            
            {/* Article Content */}
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Share this article:</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={handleShare}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium"
                    >
                      Share
                    </button>
                    {/* <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium">
                      Save
                    </button> */}
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500">Published on</p>
                  <p className="font-medium text-gray-900">{article.date}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Articles Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticle ? (
                  <div 
                    key={relatedArticle.id}
                    onClick={() => navigate(`/${relatedArticle.id}`)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                  >
                    <div className={`h-32 bg-gradient-to-br ${relatedCategoryInfo.color} flex items-center justify-center relative`}>
                      <span className="text-4xl opacity-30">{relatedCategoryInfo.icon}</span>
                      <div className="absolute top-4 left-4">
                        <span className={`${relatedCategoryInfo.bgColor} ${relatedCategoryInfo.textColor} px-3 py-1 rounded-full text-xs font-medium`}>
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-gray-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{relatedArticle.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={14} className="mr-1" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                ) : (
              <div className="text-gray-500 text-center col-span-2">
                <p>No related articles available at the moment.</p>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
}