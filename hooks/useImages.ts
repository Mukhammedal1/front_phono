import { useMutation } from "@tanstack/react-query";
import { deleteImage, uploadImages } from "../api";

export const useUploadImages = () => {
  return useMutation({
    mutationFn: uploadImages,
  });
};

export const useDeleteImage = () => {
  return useMutation({
    mutationFn: deleteImage,
  });
};
