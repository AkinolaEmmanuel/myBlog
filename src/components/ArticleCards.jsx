import { Calendar, ArrowRight, Clock, ChevronLeft } from 'lucide-react';

export const categoryData = {
  'Philosophy and Psychology': {
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
    icon: '🧠'
  },
  'Scripture Thoughts': {
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    icon: '📖'
  },
  'Ideologies and Changes': {
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
    icon: '🌱'
  },
  'Rants': {
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
    icon: '🔥'
  }
};

export function ArticleCard({ article, category, onClick }) {
  const categoryInfo = categoryData[category] || categoryData['Scripture Thoughts'];
  
  return (
    <div 
      className="group min-w-[350px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
      onClick={() => onClick && onClick(article)}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className={`h-48 w-full bg-gradient-to-br ${categoryInfo.color} flex items-center justify-center`}>
          <span className="text-6xl opacity-20">{categoryInfo.icon}</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`${categoryInfo.bgColor} ${categoryInfo.textColor} px-3 py-1 rounded-full text-sm font-medium`}>
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {article.reference || article.title || `${article.book_name} ${article.chapter} : ${article.verse}`} 
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {article.text || article.content}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{article.date || 'August 11th, 2024'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>5 min read</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Read more</span>
            <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}

