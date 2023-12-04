import { useState } from 'react';

export type ToggleTupple = [() => void, () => void, boolean];

export const useToggle = (initial: boolean): ToggleTupple => {
  const [s, setS] = useState(initial);

  return [() => setS(false), () => setS(true), s];
};
