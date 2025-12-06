import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 
          ref={ref}
          className={`text-4xl font-bold text-slate-900 mb-8 text-center tracking-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {t.about.title}
        </h2>

        <div className={`rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-sm p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-700 group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <ul className="space-y-4 text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
            {t.about.points.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-slate-900 font-bold flex-shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
