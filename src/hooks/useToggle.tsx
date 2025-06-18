import { useCallback, useState } from 'react';

export function useToggle(init: boolean): [boolean, () => void] {
  const [toggle, setToggle] = useState<boolean>(init);

  const changeToggle = useCallback(() => setToggle((t) => !t), []);

  return [toggle, changeToggle];
}
