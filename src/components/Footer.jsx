import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-gradient-to-t from-slate-50 to-white border-t border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl flex justify-center">
        <p className="text-xs text-slate-500 text-center">{t.footer.note}</p>
      </div>
    </footer>
  );
}
