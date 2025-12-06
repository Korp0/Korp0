import { useState, useEffect } from 'react';
import { Icons } from './Icons';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 hover:scale-110 transition-all duration-300 z-50 cursor-pointer group animate-fadeIn flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <span className="w-6 h-6 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-300">
            {Icons.chevronUp}
          </span>
        </button>
      )}
    </>
  );
}
