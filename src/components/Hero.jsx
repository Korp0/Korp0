import { useLanguage } from '../contexts/LanguageContext';
import { Icons } from './Icons';
import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Hero() {
  const { t } = useLanguage();
  const typedSubtitle = useTypingEffect(t.hero.subtitle, 50);

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white pt-32 pb-32 text-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight animate-fadeIn">
          {t.hero.name}
        </h1>
        
        <h2 className="text-2xl sm:text-3xl text-slate-700 font-semibold mb-4 bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent min-h-[2.5rem]">
          {typedSubtitle}
          <span className="animate-blink">|</span>
        </h2>
        
        <p className="text-lg text-slate-600 mb-10 font-medium">
          {t.hero.experience}
        </p>
        
        <button
          onClick={handleViewWork}
          className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center gap-2 mx-auto group"
        >
          {t.hero.cta}
          <span className="group-hover:translate-y-0.5 transition-transform duration-300 text-white w-5 h-5">
            {Icons.chevronDown}
          </span>
        </button>
      </div>
    </section>
  );
}
