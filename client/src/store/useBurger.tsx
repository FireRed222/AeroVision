import { create } from "zustand";

interface BurgerType {
  isBurger: boolean;
  toggleBurger: () => void;
}

export const useBurger = create<BurgerType>((set) => ({
  isBurger: false,
  toggleBurger: () => set((state) => ({ isBurger: !state.isBurger })),
}));
