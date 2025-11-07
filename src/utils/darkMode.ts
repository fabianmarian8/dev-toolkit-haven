// dev-toolkit-haven/src/utils/darkMode.ts

import { useLocalStorage } from './localStorage';
import { useEffect } from 'react';

/**
 * Hook pre správu Dark Mode.
 * Predpokladá použitie Tailwind CSS s triedou 'dark' na <html> elemente.
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkMode', false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
}

// Simulácia komponentu pre prepínanie Dark Mode
export const DarkModeToggleComponentCode = \`
import React from 'react';
import { useDarkMode } from '../utils/darkMode';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? '🌙 Light Mode' : '☀️ Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
\`;
