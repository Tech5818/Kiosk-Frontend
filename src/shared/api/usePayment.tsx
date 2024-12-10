import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const usePayment = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await axios.get("http://localhost:8080/order/payment/1");
    },
  });
};
