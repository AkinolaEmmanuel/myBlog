import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fullArticles } from '../components/mockarticle';

export default function Hero() {
  // Pick the "letter-to-my-daughter" article as the hero
  const article = fullArticles['letter-to-my-daughter'];
  const navigate = useNavigate();

  return (
    <section className="min-h-fit md:h-[600px] flex w-full items-center justify-center bg-gradient-to-br from-gray-50 to-white p-5">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="space-y-5 max-w-3xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-gray-600">
            <Calendar size={18} />
            <span className="text-lg">{article.category}, {article.date}.</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            {article.title}
            <span className="inline-block w-2 h-2 bg-gray-900 rounded-full ml-2 animate-pulse"></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed md:max-w-2xl">
            {article.excerpt}
          </p>
          <button
            className="group px-8 py-2 border-2 border-black text-gray-900 hover:text-white bg-white hover:bg-black transition-all duration-300 flex items-center gap-2 font-medium"
            onClick={() => navigate(`/${article.id}`)}
          >
            Read more
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative flex justify-center">
          <img src={article.image} alt={article.title} className="max-h-[500px] w-full object-fill rounded-xl" />
        </div>
      </div>
    </section>
  );
}