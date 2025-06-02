import { toast } from "react-toastify";
import instance from "./instance";

export const getRegions = async () => {
  try {
    const res = await instance.get("/region");
    return res.data;
  } catch (e) {
    console.error("Failed to fetch region!");
  }
};
