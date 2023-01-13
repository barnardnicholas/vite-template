import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const countAtom = atom<number>(0);
export const localStorageAtom = atomWithStorage<number>('localCount', 0);
export const sessionStorageAtom = atomWithStorage<number>(
  'sessionCount',
  0,
  createJSONStorage(() => window.sessionStorage),
);
