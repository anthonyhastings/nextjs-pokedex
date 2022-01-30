import { useCallback, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // During server-side rendering, NextJS won't have window available.
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (val) => {
      // Allow value to be a function so we have same API as setState.
      const valueToStore = val instanceof Function ? val(storedValue) : val;
      setStoredValue(valueToStore);

      // During server-side rendering, NextJS won't have window available.
      if (typeof window === 'undefined') return;

      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};

export default useLocalStorage;
