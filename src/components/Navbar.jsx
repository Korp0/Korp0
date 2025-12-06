import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Gabriel Urban" className="w-10 h-10 rounded-full" />
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
