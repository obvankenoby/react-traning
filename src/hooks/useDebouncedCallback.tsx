import { useCallback, useRef } from 'react';

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(callback: T, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  return useCallback(
    (...args: unknown[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setInterval(() => callback(...args), delay);
    },
    [callback, delay]
  );
}
