import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BearState {
  bears: number;
  increaseBy: (by: number) => void;
  add1Bear: () => void;
  killEveryBear: () => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increaseBy: (by) => set((state) => ({ bears: state.bears + by })),
  add1Bear: () => set((state) => ({ bears: state.bears + 1 })),
  killEveryBear: () => set((state) => ({ bears: 0 })),
}));

export const usePersistedBearStore = create(
  persist<BearState>(
    (set, get) => ({
      bears: 0,
      add1Bear: () => set({ bears: get().bears + 1 }),
      increaseBy: (by: number) => set({ bears: get().bears + by }),
      killEveryBear: () => set({ bears: 0 }),
    }),
    {
      name: 'bear-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
