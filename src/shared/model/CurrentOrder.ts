import { CurrentOrder as CurrentOrderType } from "@shared/types/CurrentOrder";
import { create } from "zustand";

interface CurrentOrder {
  currentOrder: CurrentOrderType[] | null;
  setCurrentOrder: (currentOrder: CurrentOrderType[]) => void;
  increaseCurrentOrder: (menuId: number) => void;
  decreaseCurrentOrder: (menuId: number) => void;
}

export const useCurrentOrder = create<CurrentOrder>((set) => ({
  currentOrder: null,
  setCurrentOrder: (currentOrder: CurrentOrderType[]) => set({ currentOrder }),
  increaseCurrentOrder: (menuId: number) =>
    set((state) => {
      if (!state.currentOrder) return { currentOrder: null };

      const updatedOrder = state.currentOrder.map((order) =>
        order.menuId === menuId
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );

      return { currentOrder: updatedOrder };
    }),

  decreaseCurrentOrder: (menuId: number) =>
    set((state) => {
      if (!state.currentOrder) return { currentOrder: null };

      const updatedOrder = state.currentOrder
        .map((order) =>
          order.menuId === menuId && order.quantity > 0
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
        .filter((order) => order.quantity > 0);
      console.log(updatedOrder);

      return { currentOrder: updatedOrder };
    }),
}));
