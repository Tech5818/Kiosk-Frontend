import { useCurrentOrder } from "@shared/model/CurrentOrder";
import { useOrderedMenu } from "@shared/model/OrderedMenu";
import { CurrentOrder } from "@shared/types/CurrentOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useOrder = () => {
  const { orderedMenu } = useOrderedMenu((state) => state);
  const { setCurrentOrder } = useCurrentOrder((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orders: CurrentOrder[]) => {
      const orderMenu: { menuId: number; quantity: number }[] = [];

      orders.forEach((order) => {
        const newOrderMenu = {
          menuId: order.menuId,
          quantity: order.quantity,
        };

        orderMenu.push(newOrderMenu);
      });

      console.log(orderMenu);

      let response;

      if (orderedMenu === null) {
        response = await axios.post("http://localhost:8080/order/1", {
          body: orderMenu,
        });
      } else {
        response = await axios.patch(
          "http://localhost:8080/order/1",
          orderMenu
        );
      }
      setCurrentOrder([]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order"],
      });
    },
  });
};
