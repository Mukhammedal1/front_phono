import { useQuery } from "@tanstack/react-query";
import { getBrands, getModels } from "../api";

interface Model {
  id: number;
  name: string;
  brandId: number;
}

export const useModels = () => {
  return useQuery<Model[]>({
    queryKey: ["models"],
    queryFn: getModels,
  });
};
