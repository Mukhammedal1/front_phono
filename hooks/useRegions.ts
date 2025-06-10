import { useQuery } from "@tanstack/react-query";
import { getRegions } from "../api";

interface Region {
  id: number;
  name: string;
  Districts: [Districts];
}

interface Districts {
  id: number;
  name: string;
  regionId: number;
}

export const useRegions = () => {
  return useQuery<Region[]>({
    queryKey: ["region"],
    queryFn: getRegions,
  });
};
