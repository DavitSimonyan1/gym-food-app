// store/quickActionsStore.js
import { create } from "zustand";

export const useQuickActionsStore = create((set) => ({
  foods: [],
  addFood: (food) => set((state) => ({ foods: [...state.foods, food] })),
}));
