import { create } from "zustand";

interface CategoryType {
  type: "all" | "normal" | "special";
  setCategoryType: (type: "all" | "normal" | "special") => void;
}

export const useCategoryType = create<CategoryType>((set) => ({
  type: "all",
  setCategoryType: (type) => set({ type }),
}));
