import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Icons } from './Icons';

export default function Skills() {
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    {
      id: 'web',
      label: t.skills.web.label,
      techs: t.skills.web.techs,
      icon: Icons.globe,
    },
    {
      id: 'mobile',
      label: t.skills.mobile.label,
      techs: t.skills.mobile.techs,
      icon: Icons.mobile,
    },
    {
      id: 'desktop',
      label: t.skills.desktop.label,
      techs: t.skills.desktop.techs,
      icon: Icons.desktop,
    },
    {
      id: 'other',
      label: t.skills.other.label,
      techs: t.skills.other.techs,
      icon: Icons.tools,
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 
          ref={ref}
          className={`text-4xl font-bold text-slate-900 mb-12 text-center tracking-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-700 group cursor-pointer hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-slate-700 mb-4 group-hover:scale-110 group-hover:text-slate-900 transition-all duration-300 inline-block">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                {category.label}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {category.techs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
