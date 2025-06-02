import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../api";

interface Brand {
  id: number;
  name: string;
}

export const useBrands = () => {
  return useQuery<Brand[]>({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
};
