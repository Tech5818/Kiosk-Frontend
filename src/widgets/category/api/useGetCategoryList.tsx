import { useCurrentCategory } from "@shared/model/CurrentCategory";
import { Category } from "@shared/types/Category";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCategoryList = () => {
  const setCurrent = useCurrentCategory((state) => state.setCurrent);

  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/menu/category");

      console.log(response.data);

      const result = response.data as Category[];

      setCurrent(result[0]);

      return result;
    },
    refetchOnWindowFocus: false,
  });
};
