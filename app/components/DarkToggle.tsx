'use client';

import { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [dark, setDark] = useState(false); // Initial state on server

  // Sync with localStorage and system preference on client
  useEffect(() => {
    const getInitialTheme = () => {
      if (typeof window !== 'undefined') {
        return (
          localStorage.getItem('theme') === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
      }
      return false;
    };

    const initialDark = getInitialTheme();
    setDark(initialDark);

    const handleChange = (e: MediaQueryListEvent) => setDark(e.matches); // Type 'e' as MediaQueryListEvent
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply dark mode class after state is set
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}