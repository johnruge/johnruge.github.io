'use client';
import { ChevronDown } from 'lucide-react';

export default function SeeFeaturedProjectsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        const section = document.getElementById('featured-projects');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }}
      className="inline-flex flex-col items-center gap-1 px-6 py-2 rounded-lg border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-medium text-base shadow-sm transition-all duration-200"
      aria-label="See Featured Projects"
    >
      <span>See Featured Projects</span>
      <ChevronDown className="mt-1 animate-bounce-slow" size={22} />
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.4s infinite;
        }
      `}</style>
    </button>
  );
}