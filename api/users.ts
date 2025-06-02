import { toast } from "react-toastify";
import instance from "./instance";

export const getUserById = async (id: number) => {
  try {
    const res = await instance.get(`/user/${id}`);
    return res.data;
  } catch (e) {
    console.error("Failed to fetch user!");
  }
};
