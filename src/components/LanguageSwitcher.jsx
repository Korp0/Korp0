import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-md hover:shadow-lg"
    >
      {language === 'en' ? 'SK' : 'EN'}
    </button>
  );
}
