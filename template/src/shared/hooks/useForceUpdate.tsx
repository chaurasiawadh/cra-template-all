import { useState } from 'react';

export const useForceUpdate = (): Function => {
  const [, setValue] = useState(0);
  return (): void => setValue((value: number): number => value + 1);
};
