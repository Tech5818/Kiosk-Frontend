import { Menu } from "@shared/types/Menu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMenu = () => {
  return useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/menu");

      const result = response.data as Menu[];

      return result;
    },
  });
};
