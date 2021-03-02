import { useEffect } from 'react';

export const useSmoothScroll = (idName: string): void => {
  useEffect((): void => {
    const ele = document.querySelector(`.${idName}`);
    ele?.scrollIntoView({ behavior: 'smooth' });
  }, []);
};
