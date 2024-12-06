import { Category } from "@shared/types/category";
import { create } from "zustand";

interface CurrentCategory {
  current: Category | null;
  setCurrent: (category: Category) => void;
}

export const useCurrentCategory = create<CurrentCategory>((set) => ({
  current: null,
  setCurrent: (category: Category) => set({ current: category }),
}));
