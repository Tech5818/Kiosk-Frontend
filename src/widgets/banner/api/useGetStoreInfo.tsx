import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface StoreInfo {
  title: string;
  description: string;
  total: number;
  category: number;
  new: number;
  season: number;
  time: number;
}

export const useGetStoreInfo = () => {
  return useQuery({
    queryKey: ["store"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/store");

      return response.data as StoreInfo;
    },
  });
};
