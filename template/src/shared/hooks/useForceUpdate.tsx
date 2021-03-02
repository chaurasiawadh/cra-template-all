import { useState } from 'react';

export const useForceUpdate = (): any => {
  const [, setValue] = useState(0);
  return (): any => setValue((value: number): number => value + 1);
};
