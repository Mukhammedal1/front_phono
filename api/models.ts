import { toast } from "react-toastify";
import instance from "./instance";

export const getModels = async () => {
  try {
    const res = await instance.get("/model");
    return res.data;
  } catch (e) {
    console.error("Failed to fetch models!");
  }
};
