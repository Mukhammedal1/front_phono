import { useQuery } from "@tanstack/react-query";
import { getDistrict } from "../api";

interface District {
  id: number;
  name: string;
  regionid:number
}

export const useDistrict = () => {
  return useQuery<District[]>({
    queryKey: ["district"],
    queryFn: getDistrict,
  });
};
