import { useCallback, useState } from 'react';

interface IUseCounter {
  counter: number;
  increment(): void;
  decrement(): void;
}

export const useCounter = (): IUseCounter => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c + 1), []);

  return { counter, increment, decrement };
};
