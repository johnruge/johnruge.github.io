'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[96vw] max-w-4xl mx-auto rounded-xl bg-white border border-gray-200 shadow-sm flex items-center px-4 py-2 md:px-8 md:py-2 transition-all">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight hover:text-blue-600 transition-colors">
          johnruge
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-normal text-base transition-colors duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md md:hidden">
          <div className="px-4 pt-4 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-normal text-base transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;