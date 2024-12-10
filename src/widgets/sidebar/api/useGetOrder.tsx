import { useOrderedMenu } from "@shared/model/OrderedMenu";
import { Order } from "@shared/types/Order";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetOrder = () => {
  const { setOrderedMenu } = useOrderedMenu((state) => state);
  return useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/order/table/1");

      const result = response.data as Order;

      return result;
    },
    select: (data) => {
      setOrderedMenu(data);

      return data;
    },
  });
};
