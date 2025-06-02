import { useQuery } from "@tanstack/react-query";
import { getRegions } from "../api";

interface Region {
  id: number;
  name: string;
}

export const useRegions = () => {
  return useQuery<Region[]>({
    queryKey: ["region"],
    queryFn: getRegions,
  });
};
