import { toast } from "react-toastify";
import instance from "./instance";

export const uploadImages = async (formData: FormData) => {
  try {
    const res = await instance.post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // toast.success("Rasmlar yuklandi");
    return res.data;
  } catch (e) {
    toast.error("Rasmlar yuklanmadi");
  }
};

export const deleteImage = async (imageId: number) => {
  try {
    const res = await instance.delete(`/image/${imageId}`);
    // toast.success("Rasm muvaffaqiyatli o'chirildi");
    return res.data;
  } catch (error) {
    toast.error("rasm o'chirishda xatolik");
  }
};
