import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createPhone,
  deletePhone,
  getAllPhones,
  getPhoneById,
  updatePhone,
} from "../api/phone";

export const useCreatePhone = () => {
  return useMutation({
    mutationFn: createPhone,
  });
};

export const useGetPhoneById = (id: number) => {
  return useQuery({
    queryKey: ["phone", id],
    queryFn: () => getPhoneById(id),
    enabled: !!id,
  });
};

export const useUpdatePhone = () => {
  return useMutation({
    mutationFn: updatePhone,
  });
};

export const useDeletePhone = () => {
  return useMutation({
    mutationFn: deletePhone,
  });
};

export const useGetAllPhones = () => {
  return useQuery({
    queryKey: ["phones"],
    queryFn: getAllPhones,
  });
};
