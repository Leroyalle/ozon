import { useEffect, useState } from 'react';

export const useDebounceValue = <T>(value: T, array: unknown[] = [], ms: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, ms);

    return () => clearTimeout(timeout);
  }, array);

  return debounceValue;
};
