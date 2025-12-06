import { useLanguage } from '../contexts/LanguageContext';
import { Icons } from './Icons';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center tracking-tight">
          {t.contact.title}
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-center gap-8">
            {/* Email */}
            <a
              href="mailto:gabourban114@gmail.com"
              className="text-slate-600 hover:text-slate-900 transition-all duration-300 group"
              title="Email"
            >
              <span className="w-7 h-7 group-hover:scale-125 transition-transform duration-300">{Icons.mail}</span>
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/gabo_urban/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-all duration-300 group"
              title="Instagram"
            >
              <span className="w-7 h-7 group-hover:scale-125 transition-transform duration-300">{Icons.instagram}</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gabriel-urban-912319274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-all duration-300 group"
              title="LinkedIn"
            >
              <span className="w-7 h-7 group-hover:scale-125 transition-transform duration-300">{Icons.linkedin}</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Korp0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-all duration-300 group"
              title="GitHub"
            >
              <span className="w-7 h-7 group-hover:scale-125 transition-transform duration-300">{Icons.github}</span>
            </a>
          </div>
          
          {/* Contact Button */}
          <a
            href="mailto:gabourban114@gmail.com"
            className="mt-4 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            {t.contact.button}
          </a>
        </div>
      </div>
    </section>
  );
}
