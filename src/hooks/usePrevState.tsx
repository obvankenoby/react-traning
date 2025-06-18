import { useEffect, useRef } from 'react';

export const usePrevState = <T,>(value: T) => {
  const stateRef = useRef<T>(null);

  useEffect(() => {
    stateRef.current = value;
  }, [value]);

  return stateRef.current;
};
