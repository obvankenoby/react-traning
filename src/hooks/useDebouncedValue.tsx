import { useState, useEffect } from 'react';

export function useDebouncedValue<T>(val: T, debounce?: number): T {
  const [debauncedValue, setDebouncedValue] = useState<T>(val);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(val), debounce || 500);

    return () => clearInterval(timer);
  }, [val, debounce]);

  return debauncedValue;
}
