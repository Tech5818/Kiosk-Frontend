import { create } from "zustand";

interface SideBar {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useSideBar = create<SideBar>((set) => ({
  open: false,
  setOpen: (isOpen: boolean) => set({ open: isOpen }),
}));
