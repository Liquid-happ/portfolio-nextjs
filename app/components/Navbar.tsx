'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#home" className="font-bold text-3xl text-blue-600 hover:text-blue-700">
          Dương Bá Quyết
        </Link>
        <div className="flex space-x-6">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}