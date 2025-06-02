import { useQuery } from "@tanstack/react-query";
import { getColors } from "../api/color";

interface Color {
  id: number;
  name: string;
  code: string;
}

export const useColor = () => {
  return useQuery<Color[]>({
    queryKey: ["color"],
    queryFn: getColors,
  });
};
