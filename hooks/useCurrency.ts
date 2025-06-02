import { useQuery } from "@tanstack/react-query";
import { getCurrency } from "../api";

interface Currency {
  id: number;
  name: string;
}

export const useCurrency = () => {
  return useQuery<Currency[]>({
    queryKey: ["currency"],
    queryFn: getCurrency,
  });
};
