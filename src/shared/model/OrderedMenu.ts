import { Order } from "@shared/types/Order";
import { create } from "zustand";

interface OrderedMenu {
  orderedMenu: Order | null;
  setOrderedMenu: (OrderedMenu: Order) => void;
}

export const useOrderedMenu = create<OrderedMenu>((set) => ({
  orderedMenu: null,
  setOrderedMenu: (orderedMenu: Order) => set({ orderedMenu }),
}));
