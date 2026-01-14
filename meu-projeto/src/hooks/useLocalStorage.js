// src/hooks/useLocalStorage.js
import { useCallback, useEffect, useRef, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const isFirstLoad = useRef(true);
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // falha silenciosa
    }
  }, [key, value]);

  const setStoredValue = useCallback((v) => {
    setValue(typeof v === 'function' ? v(value) : v);
  }, [value]);

  return [value, setStoredValue];
}
