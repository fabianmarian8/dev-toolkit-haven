// dev-toolkit-haven/src/utils/localStorage.ts

/**
 * Hook pre Persistent State (Local Storage)
 * @param key Kľúč pre Local Storage
 * @param initialValue Počiatočná hodnota
 * @returns [value, setValue]
 */
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Načítanie uloženej hodnoty alebo použitie počiatočnej hodnoty
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Uloženie hodnoty do Local Storage pri zmene
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// Príklad použitia:
// const [jsonInput, setJsonInput] = useLocalStorage('jsonToolInput', '');
