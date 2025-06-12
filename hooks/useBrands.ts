import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../api";

interface Brand {
  id: number;
  name: string;
  Models: [Models];
}

interface Models {
  id: number;
  name: string;
  brandId: number;
}

export const useBrands = () => {
  return useQuery<Brand[]>({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
};
