import { useLanguage } from '../contexts/LanguageContext';
import { Icons } from './Icons';

export default function ProjectCard({ title, description, demoLink, codeLink, image }) {
  const { t } = useLanguage();
  const showDemo = Boolean(demoLink);
  const showCode = Boolean(codeLink);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer hover:scale-105">
      {/* Image / Placeholder */}
      <div className="w-full h-48 rounded-t-xl overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-slate-300 group-hover:to-slate-400 transition-all duration-300">
            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12">
                {Icons.code}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
          {title}
        </h3>
        
        {Array.isArray(description) ? (
          <ul className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-slate-900 font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
            {description}
          </p>
        )}
        
        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {demoLink ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 text-sm cursor-pointer hover:scale-105 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <span className="w-4 h-4">{Icons.link}</span>
              {t.projects.viewDemo}
            </a>
          ) : (
            <div className="flex-1 px-4 py-2 bg-slate-300 text-slate-500 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 cursor-not-allowed">
              <span className="w-4 h-4">{Icons.link}</span>
              {t.projects.comingSoon}
            </div>
          )}
          {codeLink ? (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 text-sm cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="w-4 h-4">{Icons.github}</span>
              {t.projects.viewCode}
            </a>
          ) : (
            <div className="flex-1 px-4 py-2 border-2 border-slate-300 text-slate-500 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 cursor-not-allowed">
              <span className="w-4 h-4">{Icons.github}</span>
              {t.projects.comingSoon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
