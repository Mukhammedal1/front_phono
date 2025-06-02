import { toast } from "react-toastify";
import instance from "./instance";

interface Phone {
  title: string;
  description: string;
  ram: string;
  rom: String;
  price: number;
  year: number;
  box_with_document: boolean;
  is_new: boolean;
  is_negotiable: boolean;
  brand: string;
  model: string;
  currencyId: number;
  modelId: number;
  brandId: number;
  colorId: number;
  userId: number;
  addressId: number;
}

interface UpdatePhoneProps {
  id: number;
  data: any;
}

export const createPhone = async (data: Phone) => {
  try {
    const res = await instance.post("/phone", data);
    // toast.success("phone added");
    return res.data;
  } catch (e) {
    toast.error("phone not added");
  }
};

export const getAllPhones = async () => {
  try {
    const res = await instance.get("/phone");
    return res.data;
  } catch (e) {
    toast.error("Failed to fetch phones");
  }
};

export const getPhoneById = async (id: number) => {
  try {
    const res = await instance.get(`/phone/${id}`);
    return res.data;
  } catch (e) {
    toast.error("Phone not found");
  }
};

export const updatePhone = async ({ id, data }: UpdatePhoneProps) => {
  try {
    const res = await instance.patch(`/phone/${id}`, data);
    // toast.success("phone updated");
    return res.data;
  } catch (e) {
    toast.error("phone not updated");
  }
};

export const deletePhone = async (id: number) => {
  try {
    const res = await instance.delete(`/phone/${id}`);
    // toast.success("phone deleted");
    return res.data;
  } catch (e) {
    toast.error("phone not deleted");
  }
};
